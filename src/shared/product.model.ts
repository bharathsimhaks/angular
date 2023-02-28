export class product{
    public id:number;
    public title:string;
    public description:string;
    public quantity:number;
    public imagepath:string;
    public comments:string[];

    public constructor(id:number,title:string,description:string,imagepath:string,quantity:number=1,comments:string[]=[])
    {
        this.id=id;
        this.title=title;
        this.description=description;
        this.imagepath=imagepath;
        this.quantity=quantity;
        this.comments=comments;
    }
}