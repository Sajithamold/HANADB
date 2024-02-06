using app.DemoCapCDS1 from '../db/DemoCapCDS1';
service CatalogService {

 entity partner
    as projection on DemoCapCDS1.partner; 

}
