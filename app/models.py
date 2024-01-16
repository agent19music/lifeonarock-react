from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules=('-')
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(64),unique=True,nullable=False,server_default='')
    email = db.Column(db.String(200),unique=True)
    password = db.Column(db.String(128))

    @validates('username')
    def validate_username(self, key, username):
        assert username != '', "Username must not be empty"
        return username

class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'

    serialize_rules = ('-')
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(64))

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    blogs = db.relationship('Blog', backref='authors')

    def __repr__(self):
        return f'<Author {self.name}>'

class Blog(db.Model, SerializerMixin):
    __tablename__ = 'blogs'

    serialize_rules = ('-')

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    content = db.Column(db.Text)
    author_id = db.Column(db.ForeignKey('authors.id'),nullable=False)
    likes = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<Blog {self.name}>'
    
class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments' 

    serialize_rules = ('-')

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

                          
    