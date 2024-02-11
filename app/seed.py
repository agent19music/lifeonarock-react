from flask import Flask
from models import Author, Blog, db,User, Comment
from sqlalchemy import MetaData

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db.init_app(app)

with app.app_context():
    metadata = MetaData()
    metadata.reflect(bind=db.engine)
    if 'authors' not in metadata.tables or 'blogs' not in metadata.tables:
        db.create_all()

    print("🖊️🖊️ Seeding authors ....")
    author_data = [
        {"name": "Brian K Too", "email": "brianktoo@gmail.com", "id" : 1},
        {"name": "Sean Motanya", "email": "seanmotanya@gmail.com", "id" : 2},
        {"name": "Kight Yagami", "email": "light@gmail.com", "id" : 3},
        {"name": "Jiraiya", "email": "gutsyninja69@gmail.com", "id" : 4}
    ]
    for data in author_data:
        author = Author(**data)
        db.session.add(author)

    db.session.commit()

    print("📜📜 Seeding blogs .......")
    authors = {author.name: author for author in Author.query.all()}

    blog_data = [
        {"author_id": authors["Brian K Too"].id,
         "poster": "/poster1.png",
         "title": "Importance of intimacy",
         "content": "Intimacy is a profound aspect of human relationships that fosters connection, understanding, and mutual respect. It's not just about physical closeness; it's about emotional closeness as well. It's about letting someone into your world and sharing your deepest thoughts, fears, dreams, and feelings with them. It's about trust, vulnerability, and acceptance. Intimacy can be a powerful bond that strengthens relationships and enhances personal growth. It's a fundamental part of our human experience and plays a crucial role in our overall well-being.",
         "likes": 18},
       {
         "author_id": authors["Brian K Too"].id,
        "poster": "/poster2.png",
        "title": "Reigniting the fire",
        "content":"In every relationship, there comes a time when the initial spark might start to fade. But fear not, for it's completely normal. Reigniting the fire in a relationship involves effort, patience, and understanding. It's about rediscovering each other, spending quality time, and creating new memories. It's about open communication, expressing love and appreciation, and never taking each other for granted. Remember, love is like a fire. It needs to be nurtured and fed to keep it burning bright.",
        "likes": 35
        },
        {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster3.png",
        "title": "The Power of Positivity",
        "content":"Positivity is a powerful force that can transform our lives. It's about focusing on the good in life and being grateful for what we have. It's about cultivating a positive mindset and letting go of negativity. Positivity can help us overcome challenges, achieve our goals, and lead a happier, healthier life. It's not about ignoring the negative aspects of life, but rather choosing to focus on the positive.",
        "likes": 22
        },
        {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster4.png",
        "title": "The Art of Mindfulness",
        "content":"Mindfulness is the practice of being fully present in the moment, aware of our thoughts, feelings, and actions, without judgment or distraction. It's about being in tune with our bodies and minds, and experiencing life as it unfolds. Mindfulness can help us reduce stress, improve focus, and enhance our overall well-being. It's a simple yet powerful practice that can be incorporated into our daily lives.",
        "likes": 30
        },
        {
        "author_id" : authors["Sean Motanya"].id,
        "poster": "/poster4.png",
        "title": "The Art of Mindfulness",
        "content":"Mindfulness is the practice of being fully present in the moment, aware of our thoughts, feelings, and actions, without judgment or distraction. It's about being in tune with our bodies and minds, and experiencing life as it unfolds. Mindfulness can help us reduce stress, improve focus, and enhance our overall well-being. It's a simple yet powerful practice that can be incorporated into our daily lives.",
        "likes": 30
        },
        {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster5.png",
        "title": "Embracing Change",
        "content":"Change is an inevitable part of life. It can be challenging, but it also brings opportunities for growth and development. Embracing change means accepting the uncertainty that comes with it and being open to new experiences. It's about being flexible and adaptable, and not being afraid to step out of your comfort zone. Embracing change can lead to new discoveries about yourself and the world around you.",
        "likes": 24
        },
    {
        "author_id" : authors["Jiraiya"].id,
        "poster": "/poster6.png",
        "title": "The Power of Gratitude",
        "content":"Gratitude is a powerful emotion that can make your life better in so many ways. It's about focusing on what's good in your life and being thankful for the things you have. Gratitude is the key to a happier, healthier life. It can improve your relationships, reduce stress, and even improve your physical health. Practicing gratitude every day can help you stay positive and optimistic, which can lead to better outcomes in your life.",
        "likes": 30
    },
    {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster7.png",
        "title": "Finding Balance",
        "content":"Life is a balancing act. It's about finding the right balance between work and play, family and personal time, activity and rest. Finding balance in life is essential for maintaining good health and well-being. It's about making choices and setting priorities. It's about knowing when to push and when to rest, when to speak and when to listen, when to hold on and when to let go. Finding balance in life is not always easy, but it's worth striving for.",
        "likes": 28
    },
    {
        "author_id" : authors["Sean Motanya"].id,
        "poster": "/poster8.png",
        "title": "The Joy of Learning",
        "content":"Learning is a lifelong journey. It's about exploring new ideas, acquiring new skills, and expanding our understanding of the world. It's about curiosity, creativity, and growth. Learning can bring joy, fulfillment, and a sense of achievement. It can open doors to new opportunities and enrich our lives in countless ways. So, let's embrace the joy of learning and make the most of our journey.",
        "likes": 26
    },
    {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster9.png",
        "title": "The Value of Patience",
        "content":"Patience is a virtue that can bring peace, calm, and success into our lives. It's about waiting for the right moment, not rushing into decisions, and not letting frustration get the better of us. Patience can help us navigate through life's challenges with grace and resilience. It can strengthen our relationships, improve our decision-making, and lead to better outcomes. So, let's cultivate patience and reap its rewards.",
        "likes": 32
    },
    {
        "author_id" : authors["Brian K Too"].id,
        "poster": "/poster10.png",
        "title": "The Beauty of Simplicity",
        "content":"Simplicity is about clarity, elegance, and efficiency. It's about removing the unnecessary, focusing on what's important, and appreciating the beauty in the simple things. Simplicity can bring peace, joy, and balance into our lives. It can help us live more mindfully, make better decisions, and reduce stress. So, let's embrace simplicity and enjoy the beauty it brings.",
        "likes": 28
    }

    ]

    for data in blog_data:
        blog = Blog(**data)
        db.session.add(blog)

    db.session.commit()

    print("🙋🏾🙋🏾 Seeding users ....")
    user_data = [
        {"username": "Naruto Uzumaki", "email": "naruto@konoha.com", "password" : "ramenlover"},
        {"username": "Sasuke Uchiha", "email": "sasuke@konoha.com", "password" : "avenger123"},
        {"username": "Luffy Monkey D.", "email": "luffy@onepiece.com", "password" : "meatlover"},
        {"username": "Ichigo Kurosaki", "email": "ichigo@bleach.com", "password" : "getsuga"},
    ]
    for data in user_data:
        user = User(**data)
        db.session.add(user)

    db.session.commit()

    users = {user.username: user for user in User.query.all()}

    print("Seeding comments ....")
    comment_data = [
        {"content": "Great blog! Very insightful.", "likes": 10, "user_id": users["Naruto Uzumaki"].id, "blog_id": blogs["Importance of intimacy"].id},
        {"content": "I totally agree with your points.", "likes": 15, "user_id": users["Sasuke Uchiha"].id, "blog_id": blogs["Reigniting the fire"].id},
        {"content": "This is a very well-written blog.", "likes": 20, "user_id": users["Luffy Monkey D."].id, "blog_id": blogs["Importance of intimacy"].id},
        {"content": "Thanks for sharing this!", "likes": 25, "user_id": users["Ichigo Kurosaki"].id, "blog_id": blogs["Reigniting the fire"].id},
    ]
    for data in comment_data:
        comment = Comment(**data)
        db.session.add(comment)

    db.session.commit()

    comments = {comment.content: comment for comment in Comment.query.all()}



    print("Done seeding ✅✅")
