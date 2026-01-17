export const KNOWLEDGE_BASE = {
    SERVER_INFO: {
        ip: 'longswordsmp.net',
        port: '25565',
        version: '1.20.4+',
        supported_versions: ['1.20.4', '1.20.5', '1.20.6', '1.21+'],
        edition: 'Java & Bedrock (Port 25565 for Bedrock)',
        description: 'A premium Minecraft SMP experience. Season-based with resets every 3-6 months. Pure survival experience with a custom spawn.',
        features: [
            'Land Claiming (/claim)',
            'ViaVersion & ViaBackwards (Support for 1.20.4+)',
            'Custom Spawn',
            'Community Events',
            'Community-driven Gameplay',
            'Anti-Cheat & Anti-Grief'
        ]
    },

    RULES: [
        { category: 'General', items: ['Respect everyone', 'No griefing/stealing in unprotected areas', 'No hacking/cheating', 'No bug exploitation'] },
        { category: 'Chat', items: ['No spam/advertising', 'Keep it family-friendly', 'No controversial topics', 'English only in public chat'] },
        { category: 'Building', items: ['Respect claims', 'No lag machines', 'No offensive builds', 'Keep spawn clean'] },
        { category: 'Gameplay', items: ['No scamming', 'Fair play only'] }
    ],

    // Ranks section removed as requested (Pure SMP)
    RANKS: [],

    FAQS: [
        { q: 'Is it pay to win?', a: 'No, this is a pure SMP experience. We do not have paid ranks or crates.' },
        { q: 'How to claim land?', a: 'Use /claim command.' },
        { q: 'Is there voice chat?', a: 'No in-game voice chat, but we have Discord voice channels.' },
        { q: 'How to join on Bedrock?', a: 'Use IP: longswordsmp.net and Port: 25565' },
        { q: 'When is the reset?', a: 'Seasons last 3-6 months.' },
        { q: 'What version?', a: 'You can join on any version 1.20.4 and above.' }
    ],

    SOCIALS: {
        discord: 'https://discord.gg/longswordsmp',
        store: 'https://store.longswordsmp.net'
    }
};
