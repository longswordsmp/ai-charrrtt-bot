// Comprehensive Knowledge Base for LongSwordSMP
// Sources: Constants, Rules, Support, About pages
const KNOWLEDGE_BASE = {
    server: {
        name: "LongSwordSMP",
        ip: "longswordsmp.net",
        bedrock_port: "25565",
        version: "1.20.4 (Supports 1.20.4, 1.20.5, 1.20.6, 1.21+ via ViaVersion)",
        edition: "Java & Bedrock (Cross-play with Geyser)",
        description: "A premium, pure survival multiplayer (SMP) server focused on community, fair play, and vanilla-style gameplay. Seasons last 3-6 months.",
        features: [
            "Pure Survival (No Pay-to-Win, No Paid Ranks)",
            "Custom Spawn Area (Hand-crafted)",
            "Land Claiming System (/claim)",
            "Active Protection (Anti-Grief)",
            "Community Driven (Player experience first)",
            "Seasonal Resets (Fresh content every few months)",
            "ViaVersion Support (Join with any modern client)"
        ]
    },
    rules: {
        general: [
            "Treat all players and staff with respect.",
            "No griefing, stealing, or destroying builds in unprotected areas.",
            "No cheating, hacking, or using modified clients (X-ray, Fly, etc.).",
            "No exploiting bugs or glitches for personal gain."
        ],
        chat: [
            "No spam, excessive advertising, or self-promotion.",
            "Keep chat family-friendly and appropriate for all ages (No NSFW).",
            "No political, religious, or controversial discussions.",
            "English only in public chat channels."
        ],
        building: [
            "Respect other players' claims and property.",
            "No lag machines, obsidian pyramids, or excessive redstone.",
            "Keep spawn areas clean; no offensive builds/symbols."
        ],
        gameplay: [
            "No scamming or deceiving players in trades.",
            "All shop prices must be clearly displayed.",
            "No real money trading (RMT) for in-game items.",
            "Market manipulation is prohibited."
        ],
        enforcement: "Violating rules may result in warnings, kicks, or bans. Appeals can be made via Discord tickets."
    },
    support: {
        email: "support@longswordsmp.net",
        discord_ticket: "Open a ticket in the #support channel on Discord.",
        common_issues: {
            "Can't Connect": "Verify you are on 1.20.4+ and using IP 'longswordsmp.net'. Bedrock users MUST use port 25565.",
            "Missing Purchase": "Digital items usually arrive instantly. If not received within 5 minutes, email support or open a ticket with Transaction ID.",
            "Player Report": "Use /report [player] [reason] in-game or contact staff on Discord with evidence.",
            "Refunds": "Digital items are non-refundable once delivered. Contact support for technical issues."
        }
    },
    socials: {
        discord_invite: "https://discord.gg/longswordsmp",
        store_url: "https://store.longswordsmp.net", // Included for completeness, though no paid ranks are primary focus now
        twitter: "https://twitter.com/example", // Placeholder from constants
        youtube: "https://youtube.com/@example"  // Placeholder from constants
    }
};

module.exports = { KNOWLEDGE_BASE };
