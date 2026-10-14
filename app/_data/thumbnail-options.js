import { projects } from './portfolio';
export const thumbnailOptions = projects.slice(0,3).map(p=>({href:'/work/'+p.slug,title:p.title,image:p.image,category:p.category}));
