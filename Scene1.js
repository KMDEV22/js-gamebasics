class Scene1 extends Phaser.Scene{
    constructor(){
        super({key:'Scene1'})
    }
    preload(){
     this.load.audio('vava_sound', ['./audio/vava.mp3'])
    }
    create(){
     this.kidLaugh =this.sound.add('vava_sound',{
        loop:false
        
     })
     this.kidLaugh.play()
    }
    update(){
     console.log('i am updating')
    }
}