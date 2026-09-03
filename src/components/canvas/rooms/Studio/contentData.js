/**
 * Studio Content Data — Repurposed to Career & Achievements only (no certificates, no links)
 * Towers now represent Academics / Career / Achievements — no YouTube/Blog/TikTok
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
        icon: '🎓',
        label: 'Academics',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💼',
        label: 'Career',
        shape: 'phone',
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '🗺️',
        label: 'Maps',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '⭐',
        label: 'Pathway',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Academics ============
    {
        id: 'academics-lpu',
        platform: 'blog',
        title: 'B.Tech AI & ML — LPU (CGPA 7.21)',
        description: 'Present 2023 — Lovely Professional University, Phagwara. Pursuing AI & ML with 60+ hours hands-on projects.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2023-01-01',
        readTime: '2023–Present',
    },
    {
        id: 'academics-expert-pu',
        platform: 'blog',
        title: 'Expert PU College, Valachil — 89.4%',
        description: 'Jun 2023 — Pre-University Science Stream 89.4%, Mangalore. Strong analytical foundation.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2023-06-01',
        readTime: '89.4%',
    },
    {
        id: 'academics-jain',
        platform: 'blog',
        title: 'Jain Public School — 83.8% (10th)',
        description: 'Mar 2021 — Secondary School 83.8%, Chintamani. Aptitude competition 1st place Jan 2023.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2021-03-01',
        readTime: '83.8%',
    },
    // ============ Career ============
    {
        id: 'career-mantha',
        platform: 'tiktok',
        title: 'Site Engineer Intern — Mantha Architects',
        description: 'Jun–Sep 2025 — Hybrid AI cost system with Random Forest; recognized as Best Performer Sep 2025.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2025-09-30',
        readTime: 'Internship',
    },
    // ============ Achievements ============
    {
        id: 'achievement-hackerrank-se',
        platform: 'youtube',
        title: 'Software Engineer Intern — HackerRank',
        description: 'Mar 2026 — Professional certification from HackerRank, validating engineering proficiency.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        readTime: 'HackerRank',
    },
    {
        id: 'achievement-python-basic',
        platform: 'youtube',
        title: 'Python (Basic) — HackerRank',
        description: 'Mar 2026 — Skill certification in Python, demonstrating core programming and DSA strengths.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        readTime: 'HackerRank',
    },
    {
        id: 'achievement-100h-leetcode',
        platform: 'youtube',
        title: '100+ Hours ML & LeetCode 167 Solved',
        description: 'Jul 2024 & Nov 2024 — 100+ hours ML projects, LeetCode 167 (80E/74M/13H), HackerRank 5-Star, Aptitude 1st.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2024-07-01',
        readTime: '100+ hrs',
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
