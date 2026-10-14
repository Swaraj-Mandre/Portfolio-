import { projects } from './portfolio';
const item=p=>({type:'image',source:p.image,title:p.title,href:'/work/'+p.slug});
export const projectOptions={first:[projects[3],projects[4],projects[5],projects[1]].map(item),second:[projects[0],projects[2],projects[6],projects[3]].map(item)};
