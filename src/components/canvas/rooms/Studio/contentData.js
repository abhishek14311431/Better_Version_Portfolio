/**
 * Studio Content Data — Repurposed for Abhishek's Career & Achievements (No Certificates inside, No Links)
 * Studio door now "CAREER" with maps icon, inside shows academics + achievements only.
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
        label: 'Academic',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '🗺️',
        label: 'Maps',
        shape: 'phone',
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💼',
        label: 'Career',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '🚀',
        label: 'Pathway',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Academics ============
    {
        id: 'academics-lpu-btech',
        platform: 'blog',
        title: 'B.Tech AI & ML — Lovely Professional University',
        description: '2023–Present — CGPA 7.21, Phagwara. Pursuing AI & ML with 60+ hours hands-on projects.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: null,
        date: '2023-01-01',
        readTime: 'CGPA 7.21',
    },
    {
        id: 'academics-expert-pu',
        platform: 'blog',
        title: 'Expert PU College, Valachil — 89.4%',
        description: 'Jun 2023 — Pre-University Science Stream 89.4%, Mangalore, Karnataka.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: null,
        date: '2023-06-01',
        readTime: '89.4%',
    },
    {
        id: 'academics-jain-public',
        platform: 'blog',
        title: 'Jain Public School — 83.8%',
        description: 'Mar 2021 — Secondary School 10th 83.8%, Chintamani, Karnataka.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: null,
        date: '2021-03-01',
        readTime: '83.8%',
    },
    // ============ Career ============
    {
        id: 'career-mantha-intern',
        platform: 'linkedin',
        title: 'Site Engineer Intern — Mantha Architects',
        description: 'Jun–Sep 2025 — Hybrid AI cost estimation with Random Forest, site execution and Best Performer Sep 2025.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: null,
        date: '2025-09-30',
        readTime: 'Internship',
    },
    // ============ Achievements (No Links) ============
    {
        id: 'ach-best-performer',
        platform: 'youtube',
        title: 'Best Performer — Mantha Architects',
        description: 'Sep 2025 — Recognized as Best Performer during On-Site Engineer internship.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: null,
        date: '2025-09-30',
        readTime: 'Award',
    },
    {
        id: 'ach-hackerrank-swe',
        platform: 'youtube',
        title: 'Software Engineer Intern — HackerRank',
        description: 'Mar 2026 — Professional certification from HackerRank.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: null,
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'ach-python-basic',
        platform: 'youtube',
        title: 'Python (Basic) — HackerRank',
        description: 'Mar 2026 — Skill certification from HackerRank.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: null,
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'ach-competitive-programming',
        platform: 'youtube',
        title: 'Competitive Programming Excellence',
        description: 'Nov 2024 — Certificate of excellence in online competitive programming challenges.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: null,
        date: '2024-11-01',
        readTime: 'Award',
    },
    {
        id: 'ach-100h-ml',
        platform: 'tiktok',
        title: '100+ Hours ML & Data Science',
        description: 'Jul 2024 — Completed 100+ hours hands-on ML and Data Science projects.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: null,
        date: '2024-07-01',
        readTime: 'Achievement',
    },
    {
        id: 'ach-aptitude-first',
        platform: 'tiktok',
        title: '1st Place — Inter-college Aptitude',
        description: 'Jan 2023 — Secured first place in inter-college aptitude competition.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: null,
        date: '2023-01-01',
        readTime: 'Award',
    },
    {
        id: 'ach-leetcode',
        platform: 'linkedin',
        title: 'LeetCode — 167 Solved',
        description: '80 Easy, 74 Medium, 13 Hard — Competitive Programmer with 5-Star HackerRank (Silver Medal).',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: null,
        date: '2024-11-01',
        readTime: '167 Solved',
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
