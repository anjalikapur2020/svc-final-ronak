var logo, logoImg, l1bg, l1
var bgimg, play, about, back, popgray, popimg, groundimg, ground
var gameState = "wait"
var O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O12, O13, O14, O15, O16, O17, O18, O19, O20
var O1s, O2s, O3s, O4s, O5s, O6s, O7s, O8s, O9s, O10s, O11s, O12s, O12s, O13s, O14s, O15s, O16s, O17s, O18s, O19s, O20s
var log1, levelblockimg, levelblock, O4s1, O4s2, obs1, obs2, bronzeimg, bronze
var life = 3, life2left
var score1 = 0, score2 = 0, score2 = 0
var scorepop, scorepopimg, edges, level1up, level1upimg
var block1, block1img, obs2l2, obs1l2, winimg
var o22, o22img


function preload() {
    bgimg = loadImage("wait.jpg")
    scorepopimg = loadImage("assets/pop.png")
    levelblockimg = loadImage("level1block1.png")
    levelblockimg2 = loadImage("level1clearbox.png")
    levelblockimg3 = loadImage("level2clearbox.png")
    levelblockimgwin = loadImage("level3clearbox.png")
    playerwalkimg = loadAnimation("b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png", "b7.png")
    playerwalkleftimg = loadAnimation("left/b1.png", "left/b2.png", "left/b3.png", "left/b4.png", "left/b5.png", "left/b6.png", "left/b7.png")
    bronzeimg = loadAnimation("Bronze1.png", "Bronze2.png", "Bronze3.png", "Bronze4.png", "Bronze5.png", "Bronze6.png", "Bronze7.png", "Bronze8.png", "Bronze9.png", "Bronze10.png")
    silverimg = loadAnimation("s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png", "s7.png", "s8.png", "s9.png", "s10.png")
    goldimg = loadAnimation("c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png", "c7.png", "c8.png", "c9.png", "c10.png")



    //music
collectsound=loadSound("coin.mp3")
diesound=loadSound("die1.mp3")
gamesound=loadSound("gamemusic.mp3")


    o22img = loadImage("assets/o22.png")
    winimg = loadImage("win.gif")

    playerstandimg = loadAnimation("b4.png", "b4.png", "b4.png", "b4.png")
    level1bgimg = loadImage("assets/O531.png")
    level2bgimg = loadImage("bg.jpg")
    level3bgimg = loadImage("bg3.gif")


    bronzekey = loadImage("key/bronzekey.gif")
    silverkey = loadImage("key/silverkey.gif")
    // goldenkey = loadImage("key/goldenkey.gif")

    mouseimg = loadImage("assets/mouse.png")

    lifeallimg = loadImage("lifeall.png")
    life1left = loadImage("life2lost.png")
    life2left = loadImage("life1lost.png")
    lifelostallimg = loadImage("lifelostall.png")
    logoimg = loadImage("logo.gif")
    log1 = loadImage("log1.gif")
    l1bg = loadImage("L1bg.svg")
    level1upimg = loadImage("levelup1.gif")



    //level 2 assets
    block1img = loadImage("assets/O17.png");



    //playimg=loadImage("button1.png")
    popimg = loadImage("button1.png")
    groundimg = loadImage("ground11.png")
    O4 = loadImage("assets/O4.png");
    O6 = loadImage("assets/O6.png");
    O7 = loadImage("assets/O7.png");
    O8 = loadImage("assets/O8.png");
    // O10 = loadImage("assets/O10.png");

    O17 = loadImage("assets/O17.png");
    // O18 = loadImage("assets/O18.png");
    O30 = loadImage("assets/O30.png");
    arrowrightimg = loadImage("assets/arrowright.png")

    O21 = loadImage("lavabg.png");
    O17r = loadImage("assets/O7r.png")
    block2img = loadImage("assets/O21.png")

    overimg = loadImage("gameover.gif")

}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20)

    level1up = createSprite(width / 2, height / 2)
    level1up.addImage(level1upimg)
    level1up.visible = false
    level1up.scale = 2

    edges = createEdgeSprites()





    scorepop = createSprite(200, 50)
    scorepop.addImage(scorepopimg)
    scorepop.scale = .35
    scorepop.visible = false



    lifes = createSprite(width / 2, 50)
    lifes.addImage(lifeallimg)
    lifes.scale = 0.38
    lifes.visible = false


    logo = createSprite(width / 2, height / 2.25)
    logo.addImage(logoimg)
    logo.scale = 2;

    popgray = createSprite(width / 2, height / 2)
    popgray.addImage(log1)
    popgray.visible = false
    popgray.scale = 2


    levelblock = createSprite(width - 180, 50)
    levelblock.addImage(levelblockimg)
    levelblock.scale = 0.4
    levelblock.visible = false

/*
    restart = createImg("restart.png")
    restart.position(width / 2 - 150, height - 250)
    restart.size(300, 300)
    restart.hide()

*/

    home = createImg("home.png")
    home.position(width - 150, height - 150)
    home.size(150, 150)
    home.hide()



    level1bg = createSprite(width / 2, height / 2)
    level1bg.addImage(level1bgimg)
    level1bg.scale = 2
    level1bg.visible = false


    level2bg = createSprite(width / 4, height / 2)
    level2bg.addImage(level2bgimg)
    level2bg.scale = 2
    level2bg.visible = false

    play = createImg("stonebutton.png")
    play.position(width / 2, height / 2)
    play.size(240, 240)
    play.hide()

    about = createImg("stonehow.png")
    about.position(width / 2 - 200, height / 2 + 45)
    about.size(150, 150)
    about.hide()


    ////////////// LEVEL 1



    ground = createSprite(width / 2 - 10, height - 40)
    ground.addImage(groundimg)
    ground.visible = false
    ground.scale = 1.35
    ground.setCollider("rectangle", 0, 0, ground.width, ground.height)


    invisibleground = createSprite(width / 2 - 10, height - 40, width, 20)
    //invisibleground.addImage(groundimg)
    invisibleground.visible = false
    invisibleground.scale = 1.35
    invisibleground.setCollider("rectangle", 0, 0, invisibleground.width, invisibleground.height + 5)


    obs1 = createSprite(width / 4, ground.y)
    obs1.addImage(O8)
    obs1.visible = false
    obs1.scale = 2
    obs1.setCollider("rectangle", 0, 0, obs1.width, obs1.height / 2)


    obs2 = createSprite(width / 2 + width / 4.5, ground.y - 125)
    obs2.addImage(O21)
    obs2.visible = false
    obs2.scale = 0.75
    obs2.setCollider("rectangle", 0, 0, obs1.width, obs1.height / 2)


    O4s = createSprite(width - 50, height / 1.5)
    O4s.addImage(O4)
    //O4s.visible=false
    O4s.scale = 1.35
    //O4s.visible=false
    O4s.setCollider("rectangle", 0, 0, (O4s.width / 2 - 10), (O4s.height / 2 - 10))


    O4s1 = createSprite(50, height / 2.5)
    O4s1.addImage(O4)
    //O4s.visible=false
    O4s1.scale = 1.35
    O4s1.visible = false
    // O4s1.debug = true

    O4s1.setCollider("rectangle", 0, 0, (O4s1.width / 2 - 10), (O4s1.height / 2 - 10))


    O4s2 = createSprite(width / 2, height / 2)
    O4s2.addImage(O4)
    //O4s.visible=false
    O4s2.scale = 1.5
    O4s2.visible = false
    //  O4s2.debug = true


    O4s2.setCollider("rectangle", 0, 0, (O4s2.width / 2 - 10), (O4s2.height / 2 - 10))


    levelblock2 = createSprite(width - 130, 50)
    levelblock2.addImage(levelblockimg2)
    levelblock2.scale = 0.4
    levelblock2.visible = false

    levelblock3 = createSprite(width - 130, 50)
    levelblock3.addImage(levelblockimg3)
    levelblock3.scale = 0.4
    levelblock3.visible = false

    levelblockwin = createSprite(width - 130, 50)
    levelblockwin.addImage(levelblockimgwin)
    levelblockwin.scale = 0.4
    levelblockwin.visible = false


    bronzeGroup = new Group()

    //level 3
    block1 = createSprite(width - width / 4, height / 2.5)
    block1.addImage(block1img)
    block1.scale = 1.5
    block1.visible = false
   // block1.debug = true
    block1.setCollider("rectangle", 0, 0, (block1.width / 2), (block1.height) / 2)


    block2 = createSprite(width / 4, height / 2 + height / 8)
    block2.addImage(block2img)
    block2.scale = .75
    block2.visible = false
   // block2.debug = true
    block2.setCollider("rectangle", 0, 0, (block2.width / 2), (block2.height) / 2)


    O17s = createSprite(width - 150, height / 1.5)
    O17s.addImage(O7)
    O17s.visible = false
    //  O17s.scale = 1.35
    //O4s.visible=false
    O17s.setCollider("rectangle", 0, 0, (O4s.width / 2 - 10), (O4s.height / 2 - 10))
    O17.velocityX = -2


    gamekey = createSprite(width / 2, height / 1.5)
    gamekey.addImage("bronze", bronzekey)
    gamekey.visible = false


    silvergamekey = createSprite(width / 2, height / 1.5)
    silvergamekey.addImage("silver", silverkey)
    silvergamekey.visible = false

    player = createSprite(50, height / 5)
    player.scale = 2
    player.addAnimation("stand", playerstandimg)
    player.addAnimation("walk", playerwalkimg)
    player.addAnimation("walkleft", playerwalkleftimg)
    player.visible = false
    player.collide(O4s)


    obs1l3Group = new Group
    obs1l2Group = new Group




}

function draw() {


    if (player.x>width){
        player.x=50
    }
    if(player.x<0){
        player.x=width-50
    }

    if (life === 3) {
        lifes.addImage(lifeallimg)
    }
    if (life === 2) {
        lifes.addImage(life2left)
    }

    if (life === 1) {
        lifes.addImage(life1left)
    }
    if (life < 1) {
        lifes.addImage(lifelostallimg)
    }

    if (gameState === "wait") {
        background(bgimg)
      /*  score1 = 0
        score2 = 0
        life = 3*/

        play.show()
        about.show()
        popgray.visible = false
        home.hide()
        // back.hide()
       // restart.hide()
        logo.visible = true
        levelblock.visible = false
        O4s.visible = false
        player.visible = false

        lifes.visible = false
        scorepop.visible = false
        level1up.visible = false
        block1.visible = false
        block2.visible = false
        bronzeGroup.destroyEach()
        obs1l3Group.destroyEach()
        obs1l2Group.destroyEach()

    }


    play.mousePressed(() => {
        gameState = "LEVEL 1"
        level1up.visible = false
        player.visible = true
        player.depth++
gamesound.loop()
    })



  /*  restart.mousePressed(() => {
        reset()
        // gameState = "wait"
        level1up.visible = false

    })*/

    about.mousePressed(() => {
        gameState = "about"
        levelblock.visible = false
        level1up.visible = false


    })



    home.mousePressed(() => {
        gameState = "wait"
    })

    if (gameState === "LEVEL 1") {
        background(l1bg)
        background(level1bgimg)
        // image(level1bgimg,0,0,width,height)
        play.hide()
        about.hide()
        //restart.hide()
        player.visible = true
        player.collide(O4s)

        logo.visible = false
        home.hide()
        // back.show()
        block1.visible = false
        levelblock.addImage(levelblockimg)

        levelblock.visible = true
        ground.visible = true
        O4s.visible = true
        O4s1.visible = true
        O4s2.visible = true
        obs1.visible = true
        obs2.visible = true
        lifes.visible = true
        //bronze.visible=true
        spawncoins()
        scorepop.visible = true

        if (score1 >= 10) {
            gameState = "levelcleared1"
            bronzeGroup.destroyEach()
            player.visible = false
            gamekey.visible = true


        }

        for (i = 0; i < bronzeGroup.length; i++) {

            if (player.isTouching(bronzeGroup.get(i))) {
                bronzeGroup.get(i).destroy()
                score1 += 1
                console.log(score1)
collectsound.play()

            }
        }
        if (keyDown("space")) {
            player.velocityY = -5
        }
        player.velocityY += 0.8
        player.collide(ground)

        player.visible = true
        obs1.collide(ground)
        // ground.debug=true
        // obs1.debug=true
        //  O4s.debug = true
        if (player.isTouching(O4s1)) {
            player.collide(O4s1)
        }

        if (player.isTouching(O4s2)) {
            player.collide(O4s2)
        }

        if (player.isTouching(O4s)) {
            player.collide(O4s)
        }

        if (player.isTouching(obs1) || player.isTouching(obs2)) {
            diesound.play()
            console.log(life)
            if (player.isTouching(obs1)) {
                life -= 1
                player.x = 50
                player.y = height / 5
            }

            if (player.isTouching(obs2)) {
                life -= 1
                player.x = 50
                player.y = height / 5
            }

          


        }


        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 10
            player.changeAnimation("walk", playerwalkimg)

        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 10
            player.changeAnimation("walkleft", playerwalkleftimg)

        }

        if (keyDown(UP_ARROW)) {
            player.y = player.y - 10
        }
        if (keyDown(DOWN_ARROW)) {
            player.y = player.y + 10
        }

        if (life < 1) {
            gameState = "over"
        }

    }


    if (gameState === "about") {
        play.hide()
        about.hide()
       // restart.hide()

        popgray.visible = true
        home.show()
        O4s.visible = false
        player.visible = false
        lifes.visible = false
        scorepop.visible = false

    }

    if (gameState === "levelcleared1") {
        level1up.visible = true
        //background(0)
        background(l1bg)
        background(level1bgimg)
        levelblock.visible = false
        ground.visible = false
        O4s.visible = false
        O4s1.visible = false
        O4s2.visible = false
        obs1.visible = false
        obs2.visible = false
        lifes.visible = false
        player.visible = false
        scorepop.visible = false
        //   back.hide()

        if (keyDown("n")) {
            gameState = "Level 2"
            level1up.visible = false
            O17s.velocityX = -3
            player.y = invisibleground.y
            gamekey.destroy()
          //  score1 = 0


        }


    }




    if (gameState === "Level 2") {
        background(l1bg)
        background(level2bgimg)
        // image(level1bgimg,0,0,width,height)
        levelblock.addImage(levelblockimg2)
        ground.visible = true
        invisibleground.visible = false
        player.depth = ground.depth + 1
        player.collide(invisibleground)
        block1.visible = true
        block2.visible = true


        spawnenemy1level2()

        // invisibleground.debug=true
        console.log(player.x)
        console.log(player.y)
        // player.debug=true
        // player.setCollider("rectangle",0,0,(player.width)/2,(player.height)/2)
        //ground.debug=true
        //player.velocityY=0

        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 10
            player.changeAnimation("walk", playerwalkimg)

        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 10
            player.changeAnimation("walkleft", playerwalkleftimg)

        }
        if (keyDown("space")) {
            player.velocityY = -15
        }
        player.velocityY += 0.8


        if (player.isTouching(block1)) {
            player.collide(block1)
        }

        if (player.isTouching(block2)) {
            player.collide(block2)
        }


     //   restart.hide()

        play.hide()
        about.hide()
        logo.visible = false
        home.hide()
        //  back.show()
        levelblock.visible = true
        player.visible = true

        ground.visible = true

        lifes.visible = true
        //bronze.visible=true
        spawncoins()
        bronze.changeAnimation("silvercoin", silverimg)

        scorepop.visible = true

        if (life < 1) {
            gameState = "over"
        }



        for (i = 0; i < bronzeGroup.length; i++) {

            if (player.isTouching(bronzeGroup.get(i))) {
                bronzeGroup.get(i).destroy()
                score1 += 1
                console.log(score1)

collectsound.play()
            }
        }


        //level 2 obstacle 1

        for (i = 0; i < obs1l2Group.length; i++) {

            if (player.isTouching(obs1l2Group.get(i))) {
                console.log(life)

                diesound.play()
                life -= 1
                player.x = 50
                player.y = height / 5
            }

            if (life === 3) {
                lifes.addImage(lifeallimg)
            }
            if (life === 2) {
                lifes.addImage(life2left)
            }

            if (life === 1) {
                lifes.addImage(life1left)
            }
            if (life < 1) {
                lifes.addImage(lifelostallimg)
            }


        }


        //level 2 cleared move to level 3
        if (score1 >= 15) {
            gameState = "levelcleared2"
            bronzeGroup.destroyEach()
            player.visible = false
            //gamekey.addImage(goldenkey)
            bronzeGroup.destroyEach()
            obs1l2Group.destroyEach()


        }



    }



    if (gameState === "levelcleared2") {
        background(l1bg)
        background(level2bgimg)
        //background(0)
        //gamekey.addImage("silver",silverkey)
        silvergamekey.visible = true
        level1up.visible = true

        block1.visible = false
        block2.visible = false
        levelblock.visible = false
        ground.visible = false
        O4s.visible = false
        O4s1.visible = false
        O4s2.visible = false
        obs1.visible = false
        obs2.visible = false
        lifes.visible = false
        player.visible = false
        scorepop.visible = false
        //  back.hide()
        block1.visible = false
        block2.visible = false


        if (keyDown("n")) {
            gameState = "Level 3"
            level1up.visible = false

            O17s.velocityX = -3
            player.y = invisibleground.y
            silvergamekey.destroy()
          //  score1 = 0



        }


    }



    //////////////////////////////////////////level 3///////////////////////////////////////

    if (gameState === "Level 3") {
        background(l1bg)
        background(level3bgimg)
        levelblock.addImage(levelblockimg3)
        ground.visible = false
        invisibleground.visible = false
        player.depth = ground.depth + 1
        player.collide(invisibleground)
        spawnenemy1level3()

        if (player.isTouching(O17s)) {
            diesound.play()
            life -= 1
            O17s.x = 55
          //  O17s.debug=true
       /*     if (life === 3) {
                lifes.addImage(lifeallimg)
            }
            if (life === 2) {
                lifes.addImage(life2left)
            }

            if (life === 1) {
                lifes.addImage(life1left)
            }
            if (life < 1) {
                lifes.addImage(lifelostallimg)
            }*/

        }


        for(i=0;i<obs1l3Group.length;i++){
            if(player.isTouching(obs1l3Group.get(i))){
                diesound.play()
                life -= 1
                obs1l3Group.get(i).destroy()
            }
        }

        O17s.visible = true
        // O17s.velocityY = -2
        // O17s.velocityX=-3
        if (O17s.x <= 50) {
            O17s.velocityX = 6
            O17s.addImage(O17r)

        }
        if (O17s.x >= width) {
            O17s.velocityX = -6
            O17s.addImage(O7)

        }
        //O17s.bounceOff(edges)
        // invisibleground.debug=true
        console.log(player.x)
        console.log(player.y)
        // player.debug=true
        // player.setCollider("rectangle",0,0,(player.width)/2,(player.height)/2)
        //ground.debug=true
        //player.velocityY=0

        if (keyDown(RIGHT_ARROW)) {
            player.x = player.x + 10
            player.changeAnimation("walk", playerwalkimg)

        }

        if (keyDown(LEFT_ARROW)) {
            player.x = player.x - 10
            player.changeAnimation("walkleft", playerwalkleftimg)

        }
        if (keyDown("space")) {
            player.velocityY = -15
        }
        player.velocityY += 0.8


        if (player.isTouching(block1)) {
            player.collide(block1)
        }

        if (player.isTouching(block2)) {
            player.collide(block2)
        }


       // restart.hide()

        play.hide()
        about.hide()
        logo.visible = false
        home.hide()
        // back.show()
        levelblock.visible = true
        player.visible = true

        ground.visible = false

        lifes.visible = true
        //bronze.visible=true
        spawncoins()
        bronze.changeAnimation("goldcoin", goldimg)
        bronze.scale = 0.75
        scorepop.visible = true

        if (life < 1) {
            gameState = "over"
        }



        for (i = 0; i < bronzeGroup.length; i++) {

            if (player.isTouching(bronzeGroup.get(i))) {
                bronzeGroup.get(i).destroy()
                score1 += 1
                console.log(score1)
collectsound.play()

            }
        }


        //level 2 obstacle 1

        for (i = 0; i < obs1l2Group.length; i++) {

            if (player.isTouching(obs1l2Group.get(i))) {
                console.log(life)
diesound.play()
                life -= 1
                player.x = 50
                player.y = height / 5
            }

            if (life === 3) {
                lifes.addImage(lifeallimg)
            }
            if (life === 2) {
                lifes.addImage(life2left)
            }

            if (life === 1) {
                lifes.addImage(life1left)
            }
            if (life < 1) {
                lifes.addImage(lifelostallimg)
            }


        }


        //level 2 cleared move to level 3
        if (score1 >= 20) {
            gameState = "levelcleared3"
            bronzeGroup.destroyEach()
            player.visible = false
            //   gamekey.addImage(goldenkey)
            bronzeGroup.destroyEach()
            obs1l2Group.destroyEach()
            obs1l3Group.destroyEach()


        }



    }




    if (gameState === "levelcleared3") {
        // background(l1bg)
        background(winimg)
        obs1l3Group.destroyEach()
        //background(0)
        //gamekey.addImage("silver",silverkey)
        //  goldengamekey.visible=true
        level1up.visible = false
        O17s.visible = false
        block1.visible = false
        block2.visible = false
        levelblock.visible = false
        ground.visible = false
        O4s.visible = false
        O4s1.visible = false
        O4s2.visible = false
        obs1.visible = false
        obs2.visible = false
        lifes.visible = false
        player.visible = false
        scorepop.visible = false



    }



    if (gameState === "levelcleared2") {
        background(l1bg)
        background(level2bgimg)
        //background(0)
        //gamekey.addImage("silver",silverkey)
        silvergamekey.visible = true
        level1up.visible = true

        block1.visible = false
        block2.visible = false
        levelblock.visible = false
        ground.visible = false
        O4s.visible = false
        O4s1.visible = false
        O4s2.visible = false
        obs1.visible = false
        obs2.visible = false
        lifes.visible = false
        player.visible = false
        scorepop.visible = false
        // back.hide()

        if (keyDown("n")) {
            gameState = "level 3"

            O17s.velocityX = -3
            player.y = invisibleground.y
            silvergamekey.destroy()
            invisibleground.visible=true
           // score1 = 0



        }


    }


    drawSprites();

    if (gameState === "LEVEL 1" || gameState === "Level 2" || gameState === "Level 3") {
        textSize(50)
        fill("brown")
        strokeWeight(2)
        stroke("yellow")
        text(score1, scorepop.x - 25, 65)

    }

    if (gameState === "over") {
        background(overimg)
        obs1.visible = false
        obs2.visible = false
        //player.visible = false
        scorepop.visible = false
      //  restart.show()
        obs1l3Group.destroyEach()
gamesound.stop()

        //   back.hide()
    }

    if (gameState === "levelcleared3") {
        background(winimg)
        obs1.visible = false
        obs2.visible = false
        player.visible = false
        scorepop.visible = false
       // restart.show()
        obs1l3Group.destroyEach()
gamesound.stop()

        //  back.hide()
    }


}


function spawncoins() {
    if (frameCount % 60 == 0) {

        bronze = createSprite(width + 10, 50)
        bronze.y = Math.round(random(50, height - 100))
        bronze.addAnimation("bronzecoin", bronzeimg)
        bronze.addAnimation("silvercoin", silverimg)
        bronze.addAnimation("goldcoin", goldimg)


        bronze.velocityX = -5
        bronze.scale = 0.1
//bronze.debug=true
        bronzeGroup.add(bronze)
        //bronze.visible=false

    }
}

function spawnenemy1level2() {
    if (frameCount % 60 == 0) {
        obs1l2 = createSprite(width / 4, -50)

        var rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: obs1l2.x = Math.round(random(50, width - 50))
                obs1l2.addImage(O30)
                //obs1l2.visible = false
                obs1l2.scale = 1.5
                obs1l2.setCollider("rectangle", 0, 0, obs1.width, obs1.height / 2)
                obs1l2.velocityY = 5
                break;


            case 2: obs1l2.y = Math.round(random(50, height - 150))
                obs1l2.addImage(arrowrightimg)
                //obs1l2.visible = false
                obs1l2.scale = 1.5
                obs1l2.setCollider("rectangle", 0, 0, obs1l2.width, obs1l2.height / 2)
                obs1l2.velocityX = 5
                break;

            default: break;
        }


        //bronze.visible=false
        obs1l2Group.add(obs1l2)
    }
}




function spawnenemy1level3() {
    if (frameCount % 60 == 0) {
        obs1l3 = createSprite(width / 4, -50)
        //obs1l3.debug=true
        var rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: obs1l3.x = Math.round(random(50, width - 50))
                obs1l3.addImage(o22img)

                //obs1l2.visible = false
                obs1l3.scale = 1.5
                obs1l3.setCollider("rectangle", 0, 0, obs1.width, obs1.height / 2)
                obs1l3.velocityY = 5
                break;


            case 2: obs1l3.y = Math.round(random(50, height - 150))
                obs1l3.x = width - 10
                //obs1l2.visible = false
                obs1l3.addImage(mouseimg)
                obs1l3.scale = 1.5
                obs1l3.setCollider("rectangle", 0, 0, obs1l3.width, obs1l3.height / 2)
                obs1l3.velocityX = -5
                break;

            default: break;
        }


        //bronze.visible=false
        obs1l3Group.add(obs1l3)
    }
}

function reset() {

    gameState = "wait"
    score1 = 0
    score2 = 0
    life = 3
    player.changeAnimation("stand", playerstandimg)

    player.x = 100
    player.y = 100
    player.depth++
    ground.visible = false
    O4s.visible = false
    O4s1.visible = false
    O4s2.visible = false
    obs1.visible = false
    obs2.visible = false
    lifes.visible = false
    obs1l3Group.destroyEach()

    if (life === 3) {
        lifes.addImage(lifeallimg)
    }
    if (life === 2) {
        lifes.addImage(life2left)
    }

    if (life === 1) {
        lifes.addImage(life1left)
    }
    if (life < 1) {
        lifes.addImage(lifelostallimg)
    }


}

