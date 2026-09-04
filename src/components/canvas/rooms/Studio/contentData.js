/**
 * Studio Content Data — Achievements spiral (same animated style as previous tech demos)
 * Inside CAREER door now shows achievements, no links, same monitor/tv/phone spiral.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '🏆',
        label: 'Achievement',
        shape: 'tv',
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📜',
        label: 'Certificate',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💻',
        label: 'Coding',
        shape: 'phone',
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '⭐',
        label: 'Award',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '🚀',
        label: 'Milestone',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    {
        id: 'ach-best-performer',
        platform: 'youtube',
        title: 'Best Performer — Mantha Architects',
        description: 'Sep 2025 — Recognized as Best Performer during On-Site Engineer internship for hybrid AI cost estimation.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2025-09-30',
        readTime: 'Award',
    },
    {
        id: 'ach-hackerrank-swe',
        platform: 'blog',
        title: 'Software Engineer Intern — HackerRank',
        description: 'Mar 2026 — Professional certification from HackerRank.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'ach-python-basic',
        platform: 'blog',
        title: 'Python (Basic) — HackerRank',
        description: 'Mar 2026 — Skill certification from HackerRank.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'ach-competitive',
        platform: 'linkedin',
        title: 'Competitive Programming Excellence',
        description: 'Nov 2024 — Certificate of excellence in online competitive programming challenges.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2024-11-01',
        readTime: 'Award',
    },
    {
        id: 'ach-100h',
        platform: 'tiktok',
        title: '100+ Hours ML & Data Science',
        description: 'Jul 2024 — Completed 100+ hours hands-on ML and Data Science projects.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2024-07-01',
        readTime: 'Achievement',
    },
    {
        id: 'ach-aptitude',
        platform: 'youtube',
        title: '1st Place — Inter-college Aptitude',
        description: 'Jan 2023 — Secured first place in inter-college aptitude competition.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2023-01-01',
        readTime: 'Award',
    },
    {
        id: 'ach-leetcode',
        platform: 'blog',
        title: 'LeetCode — 167 Solved',
        description: '80 Easy, 74 Medium, 13 Hard — 5-Star HackerRank, Problem Solver badges.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2024-11-01',
        readTime: '167 Solved',
    },
    {
        id: 'ach-oracle-data',
        platform: 'tiktok',
        title: 'Oracle Data Platform 2025',
        description: 'Mar 2026 — Oracle Data Platform 2025 certification.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'ach-oracle-ai',
        platform: 'tiktok',
        title: 'AI Foundations Associate — Oracle',
        description: 'Oct 2025 — AI Foundations Associate certification.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2025-10-01',
        readTime: 'Certificate',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
