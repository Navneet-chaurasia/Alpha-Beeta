//this is a module, class which will contain info about all the games
//whenever anyone will add a game he/she must register entry here


class GamesArray{
 
    static allGames = [
        {
            'name': "Snake Game",
            'version': 1.0,
            'category': "timepass",
            'createdAt': Date.now,
            'coverImage': "public/assets/gameCoverImages/snakeGame.jpg"
        }
    ]
}