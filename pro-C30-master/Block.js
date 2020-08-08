class Block{
    constructor(x,y,width,height) {
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
    }

    display(){
        
        if(this.body.speed<3){
            var pos = this.body.position;
            var r = Math.round(random(0,255));
            var g = Math.round(random(0,255));
            var b = Math.round(random(0,255));
            push();
            fill(r,g,b);
            noStroke();    
            rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }

        else{
            World.remove(world, this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.visibility);
            pop();
        }
    }

        score(){
            if (this.Visibility < 0 && this.Visibility > -1005){
            score++;
        }
    }
}