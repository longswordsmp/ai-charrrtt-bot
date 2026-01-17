require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const Groq = require('groq-sdk');
const { KNOWLEDGE_BASE } = require('./knowledge');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// System prompt for the AI
const SYSTEM_PROMPT = `You are the official support bot for LongSwordSMP, a premium Minecraft SMP server.
Your goal is to answer player questions accurately using the provided knowledge base.
Be helpful, friendly, and concise.

IMPORTANT RULES:
1. ONLY answer questions related to:
   - LongSwordSMP (IP, rules, features, joining, etc.)
   - Minecraft gameplay (crafting, mechanics, etc.)
   - The Discord server (channels, roles, etc.)
2. If a user asks about anything else (math, history, coding, real world events, etc.), strictly reply with: "I can only answer questions about LongSwordSMP, Minecraft, or our Discord."
3. Do NOT engage in general conversation unrelated to the server.
4. Use Discord Markdown formatting (e.g., **bold** for key terms, \`code\` for commands) to make your answers look meaningful and pretty.

Server Information:
${JSON.stringify(KNOWLEDGE_BASE, null, 2)}

Instructions:
1. Use the information provided above as your primary source.
2. If you don't know the answer, say "I'm not sure about that, please ask a staff member."
3. Keep answers short and direct.
4. If asking about joining, mention both IP (longswordsmp.net) and version (1.20.4+).
5. If asking about Bedrock, emphasize Port 25565.
6. Emphasize that there are NO paid ranks and NO pay-to-win elements (Pure SMP).
`;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const content = message.content.trim();

    // Check for .ask command
    if (content.startsWith('.ask ')) {
        const query = content.slice(5).trim();
        if (!query) return message.reply('Please provide a question after .ask');

        // Show typing indicator
        await message.channel.sendTyping();

        try {
            const completion = await groq.chat.completions.create({
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: query }
                ],
                model: 'llama-3.1-8b-instant',
                temperature: 0.5,
                max_tokens: 300,
            });

            const answer = completion.choices[0]?.message?.content || "I couldn't generate an answer.";

            // Create existing local file attachment
            const logoPath = path.join(__dirname, 'assets', 'logo.png');
            const logoAttachment = new AttachmentBuilder(logoPath, { name: 'logo.png' });

            // Build the beautiful purple embed
            const embed = new EmbedBuilder()
                .setColor('#a855f7') // Premium Purple
                .setAuthor({ name: 'LongSwordSMP Assistant', iconURL: 'attachment://logo.png' })
                .setDescription(answer)
                .setThumbnail('attachment://logo.png')
                .setFooter({ text: 'LongSwordSMP • 1.20.4+ • Pure Survival', iconURL: 'attachment://logo.png' })
                .setTimestamp();

            await message.reply({
                embeds: [embed],
                files: [logoAttachment]
            });

        } catch (error) {
            console.error('Error querying Groq:', error);
            await message.reply('Sorry, I encountered an error while processing your request.');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
