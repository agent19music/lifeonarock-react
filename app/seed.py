from faker import Faker
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from app import create_app  

fake = Faker()
db = SQLAlchemy()

app = create_app()
app.app_context().push()
db.init_app(app)

def generate_long_text():
    # Generate a paragraph with at least 300 words
    return ' '.join(fake.paragraphs(nb=10))

def seed_data():
    with app.app_context():
        # Create users
        for _ in range(10):
            username = fake.user_name()
            email = fake.email()
            password = fake.password()

            user = User(username=username, email=email, password=password)
            db.session.add(user)

        # Create authors
        for _ in range(5):
            name = fake.name()
            email = fake.email()

            author = Author(name=name, email=email)
            db.session.add(author)

        # Create blogs
        for _ in range(20):
            title = fake.sentence()
            content = generate_long_text()
            author = Author.query.order_by(func.random()).first()

            blog = Blog(title=title, content=content, author=author, likes=fake.random_int(min=0, max=100))
            db.session.add(blog)

        # Create comments
        for _ in range(30):
            content = fake.paragraph()
            user = User.query.order_by(func.random()).first()
            blog = Blog.query.order_by(func.random()).first()

            comment = Comment(content=content, likes=fake.random_int(min=0, max=50), user=user, blog=blog)
            db.session.add(comment)

        try:
            db.session.commit()
        except IntegrityError as e:
            print(f"Error: {e}")
            db.session.rollback()

if __name__ == "__main__":
    from app.models import User, Author, Blog, Comment
    from sqlalchemy import func

    seed_data()
