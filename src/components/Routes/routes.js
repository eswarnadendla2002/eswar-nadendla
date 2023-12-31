import Page from "../../Page";
import ExploreMore from "../About/ExploreMore";
import Designs from "../Designs/designs";
import projectDetails from "../Projects/projectDetails";

export const Routing =[{
    path:'/designs',
    component:Designs
}
,{
    path:'',
    component:Page
}
,{
    path:'/projects/:id',
    component:projectDetails
}
,{
    path:'/explore',
    component:ExploreMore
}
]