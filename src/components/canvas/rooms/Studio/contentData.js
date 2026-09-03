/**
 * Studio Content Data — Repurposed for Abhishek's Achievements & Career Pathway
 * Each tower (monitor/tv/phone) now shows a milestone, not a blog/youtube/tiktok.
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
        label: 'Career',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📜',
        label: 'Certification',
        shape: 'phone',
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '⭐',
        label: 'Milestone',
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
    // ============ Career Pathway ============
    {
        id: 'career-lpu-btech',
        platform: 'blog',
        title: 'B.Tech AI & ML — Lovely Professional University',
        description: 'Present 2023 — CGPA 7.21, Phagwara. 60+ hours hands-on AI/ML with real-world data analysis and cross-functional collaboration.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2023-01-01',
        readTime: '2023–Present',
    },
    {
        id: 'career-mantha-intern',
        platform: 'blog',
        title: 'Site Engineer Intern — Mantha Architects',
        description: 'Jun–Sep 2025 — Built hybrid rule-based + Random Forest cost system, automated workflows and tracked site expenditures — Best Performer.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://drive.google.com/file/d/1k23IieZexkiBd10yYdqkZVer2O_Zb1PK/view',
        date: '2025-09-30',
        readTime: 'Internship',
    },
    {
        id: 'career-expert-pu',
        platform: 'linkedin',
        title: 'Expert PU College, Valachil — Science 89.4%',
        description: 'Jun 2023 — Pre-University Science Stream 89.4%, Mangalore. Earned LeetCode badges and aptitude strengths.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2023-06-01',
        readTime: '89.4%',
    },
    // ============ Achievements & Certifications ============
    {
        id: 'cert-oracle-data-platform',
        platform: 'tiktok',
        title: 'Oracle Data Platform 2025 — Oracle',
        description: 'Certified Mar 2026 — sharebadge 073B1FF, validating data platform and model evaluation foundations.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=073B1FF0AAC35989DA09FC2FFF738175AA99814F4C97E68E21B51869E2730453',
        date: '2026-03-01',
        readTime: 'Certificate',
    },
    {
        id: 'cert-ai-foundations',
        platform: 'tiktok',
        title: 'AI Foundations Associate — Oracle',
        description: 'Certified Oct 2025 — sharebadge 54780D, foundations in AI/ML principles and evaluation.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=54780D3E5B8F39A9CF7A66503A84CA5A09227260D237F4C8165E385C10CE68B8',
        date: '2025-10-01',
        readTime: 'Certificate',
    },
    {
        id: 'cert-python-dsa',
        platform: 'tiktok',
        title: 'Python with DSA — CSE Patashala',
        description: 'Certified Jul 2025 — hands-on Python and data structures for competitive programming and ML.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://drive.google.com/file/d/1fGqwGTVDj9pod4YpA7kOrJNKZvkKP2Hi/view',
        date: '2025-07-01',
        readTime: 'Certificate',
    },
    {
        id: 'achievement-60h-leetcode',
        platform: 'youtube',
        title: '60+ Hours AI/ML & LeetCode Badges',
        description: 'Jan 2026 — 60+ hours real-world AI/ML and Nov 2024 LeetCode badges, plus Jan 2023 1st place inter-college aptitude.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-01-01',
        readTime: 'Achievement',
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
