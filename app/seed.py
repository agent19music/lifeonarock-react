from flask import Flask
from faker import Faker
from flask_sqlalchemy import SQLAlchemy
from models import User, Author, Blog, Comment
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
fake = Faker()

def create_users(num_users):
    users = []
    for _ in range(num_users):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password()
        )
        users.append(user)
    return users

def create_authors(num_authors):
    authors = []
    for _ in range(num_authors):
        author = Author(
            name=fake.name(),
            email=fake.email()
        )
        authors.append(author)
    return authors

def create_blogs(num_blogs, authors):
    blogs = []
    for _ in range(num_blogs):
        blog = Blog(
            title=fake.sentence(),
            content=fake.paragraphs(nb=3),  # Adjust the number of paragraphs to meet the word count
            author_id=fake.random_element(elements=authors).id,
            likes=fake.random_int(min=0, max=100)
        )
        blogs.append(blog)
    return blogs

def create_comments(num_comments, users, blogs):
    comments = []
    for _ in range(num_comments):
        comment = Comment(
            content=fake.paragraph(),
            likes=fake.random_int(min=0, max=50),
            user_id=fake.random_element(elements=users).id,
            blog_id=fake.random_element(elements=blogs).id
        )
        comments.append(comment)
    return comments

def seed_data():
    db = SQLAlchemy()

    # Adjust the number of entities as needed
    num_users = 2
    num_authors = 2
    num_blogs = 2
    num_comments = 2

    try:
        db.create_all()

        users = create_users(num_users)
        authors = create_authors(num_authors)
        blogs = create_blogs(num_blogs, authors)
        comments = create_comments(num_comments, users, blogs)

        db.session.add_all(users)
        db.session.add_all(authors)
        db.session.add_all(blogs)
        db.session.add_all(comments)

        db.session.commit()

        print("Database seeded successfully.")

    except IntegrityError:
        db.session.rollback()
        print("IntegrityError: Database already seeded.")

if __name__ == "__main__":
    seed_data()
