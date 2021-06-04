class Player { 
    constructor(player) {
        this.player = player; 
        this.x = player.x;
        this.y = player.y;
    }
    update(){
        database.ref(this.player).set({
          x:this.x,
          y:this.y,
        });
    }
    getPlayerInfo(){
        var playerInfoRef = database.ref(this.player);
        playerInfoRef.on("value",(data)=>{
            PC = data.val();
        })
      }
}