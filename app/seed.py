from faker import Faker
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from app import app, db  
from models import Author, Blog, Comment

with app.app_context():
    db.create_all()

    print("Seedign authors ....")

    author_data = [
        {"name": "Brian K TOo", "email":"brianktoo@gmail.com"},
        {"name": "Sean Motanya", "email":"seanmotanya@gmail.com"},
        {"name": "Kight Yagami", "email":"light@gmail.com"},
        {"name": "Kakashi Hatake", "email":"kakashisensei@gmail.com"}
    ]
    for data in author_data:
        author = Author(**data)
        db.session.add(author)
    
    db.session.commit() 

    print("Seeding blogs .......")

    blog_data =[
        {"author" : "Brian.K.Too",
          "poster": "./client/public/poster1.png",
          "title": "Importance of intimacy",
          "content":"Intimacy is a profound aspect of human relationships that fosters connection, understanding, and mutual respect. It's not just about physical closeness; it's about emotional closeness as well. It's about letting someone into your world and sharing your deepest thoughts, fears, dreams, and feelings with them. It's about trust, vulnerability, and acceptance. Intimacy can be a powerful bond that strengthens relationships and enhances personal growth. It's a fundamental part of our human experience and plays a crucial role in our overall well-being.",
          "like-count": 18},
         {
          "author" : "Brian.K.Too",
          "poster": "/poster2.png",
          "title": "Reigniting the fire",
          "content":"In every relationship, there comes a time when the initial spark might start to fade. But fear not, for it's completely normal. Reigniting the fire in a relationship involves effort, patience, and understanding. It's about rediscovering each other, spending quality time, and creating new memories. It's about open communication, expressing love and appreciation, and never taking each other for granted. Remember, love is like a fire. It needs to be nurtured and fed to keep it burning bright.",
          "like-count": 35
          },
          {
          "author" : "Brian.K.Too",
          "poster": "/poster3.png",
          "title": "The Power of Positivity",
          "content":"Positivity is a powerful force that can transform our lives. It's about focusing on the good in life and being grateful for what we have. It's about cultivating a positive mindset and letting go of negativity. Positivity can help us overcome challenges, achieve our goals, and lead a happier, healthier life. It's not about ignoring the negative aspects of life, but rather choosing to focus on the positive.",
          "like-count": 22
          },
          {
          "author" : "Brian.K.Too",
          "poster": "/poster4.png",
          "title": "The Art of Mindfulness",
          "content":"Mindfulness is the practice of being fully present in the moment, aware of our thoughts, feelings, and actions, without judgment or distraction. It's about being in tune with our bodies and minds, and experiencing life as it unfolds. Mindfulness can help us reduce stress, improve focus, and enhance our overall well-being. It's a simple yet powerful practice that can be incorporated into our daily lives.",
          "like-count": 30
          },
          {
          "author" : "Brian.K.Too",
          "poster": "/poster4.png",
          "title": "The Art of Mindfulness",
          "content":"Mindfulness is the practice of being fully present in the moment, aware of our thoughts, feelings, and actions, without judgment or distraction. It's about being in tune with our bodies and minds, and experiencing life as it unfolds. Mindfulness can help us reduce stress, improve focus, and enhance our overall well-being. It's a simple yet powerful practice that can be incorporated into our daily lives.",
          "like-count": 30
          },
          {
           "author" : "Brian.K.Too",
          "poster": "/poster5.png",
          "title": "Embracing Change",
          "content":"Change is an inevitable part of life. It can be challenging, but it also brings opportunities for growth and development. Embracing change means accepting the uncertainty that comes with it and being open to new experiences. It's about being flexible and adaptable, and not being afraid to step out of your comfort zone. Embracing change can lead to new discoveries about yourself and the world around you.",
          "like-count": 24
          },
        {
           "author" : "Brian.K.Too",
          "poster": "/poster6.png",
          "title": "The Power of Gratitude",
          "content":"Gratitude is a powerful emotion that can make your life better in so many ways. It's about focusing on what's good in your life and being thankful for the things you have. Gratitude is the key to a happier, healthier life. It can improve your relationships, reduce stress, and even improve your physical health. Practicing gratitude every day can help you stay positive and optimistic, which can lead to better outcomes in your life.",
          "like-count": 30
        },
        {
          "author" : "Brian.K.Too",
          "poster": "/poster7.png",
          "title": "Finding Balance",
          "content":"Life is a balancing act. It's about finding the right balance between work and play, family and personal time, activity and rest. Finding balance in life is essential for maintaining good health and well-being. It's about making choices and setting priorities. It's about knowing when to push and when to rest, when to speak and when to listen, when to hold on and when to let go. Finding balance in life is not always easy, but it's worth striving for.",
          "like-count": 28
        },
        {
            "author" : "Brian.K.Too",
          "poster": "/poster8.png",
          "title": "The Joy of Learning",
          "content":"Learning is a lifelong journey. It's about exploring new ideas, acquiring new skills, and expanding our understanding of the world. It's about curiosity, creativity, and growth. Learning can bring joy, fulfillment, and a sense of achievement. It can open doors to new opportunities and enrich our lives in countless ways. So, let's embrace the joy of learning and make the most of our journey.",
          "like-count": 26
        },
        {
          "author" : "Brian.K.Too",
          "poster": "/poster9.png",
          "title": "The Value of Patience",
          "content":"Patience is a virtue that can bring peace, calm, and success into our lives. It's about waiting for the right moment, not rushing into decisions, and not letting frustration get the better of us. Patience can help us navigate through life's challenges with grace and resilience. It can strengthen our relationships, improve our decision-making, and lead to better outcomes. So, let's cultivate patience and reap its rewards.",
          "like-count": 32
        },
        {
          "author" : "Brian.K.Too",
          "poster": "/poster10.png",
          "title": "The Beauty of Simplicity",
          "content":"Simplicity is about clarity, elegance, and efficiency. It's about removing the unnecessary, focusing on what's important, and appreciating the beauty in the simple things. Simplicity can bring peace, joy, and balance into our lives. It can help us live more mindfully, make better decisions, and reduce stress. So, let's embrace simplicity and enjoy the beauty it brings.",
          "like-count": 28
        },
        

    ]

    for data in blog_data:
        blog = Blog(**data)
        db.session.add(blog)

    db.session.commit()    

    print("Done seeding")

# fake = Faker()

# def generate_long_text():
#     # Generate a paragraph with at least 300 words
#     return ' '.join(fake.paragraphs(nb=10))

# def seed_data():
#     with app.app_context():
#         # Importing models here to ensure they are recognized within the app context
#         from models import User, Author, Blog, Comment
#         from sqlalchemy import func

#         # Create users
#         for _ in range(10):
#             username = fake.user_name()
#             email = fake.email()
#             password = fake.password()

#             user = User(username=username, email=email, password=password)
#             db.session.add(user)

#         # Create authors
#         for _ in range(5):
#             name = fake.name()
#             email = fake.email()

#             author = Author(name=name, email=email)
#             db.session.add(author)

#         # Create blogs
#         for _ in range(20):
#             title = fake.sentence()
#             content = generate_long_text()
#             author = Author.query.order_by(func.random()).first()

#             blog = Blog(title=title, content=content, author=author, likes=fake.random_int(min=0, max=100))
#             db.session.add(blog)

#         # Create comments
#         for _ in range(30):
#             content = fake.paragraph()
#             user = User.query.order_by(func.random()).first()
#             blog = Blog.query.order_by(func.random()).first()

#             comment = Comment(content=content, likes=fake.random_int(min=0, max=50), user_id=user.id, blog=blog)
#             db.session.add(comment)

#         try:
#             db.session.commit()
#         except IntegrityError as e:
#             print(f"Error: {e}")
#             db.session.rollback()

if __name__ == "__main__":
    seed_data()
