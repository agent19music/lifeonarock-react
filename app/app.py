#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate

from models import db,Blog

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return''

@app.route('/blogs', methods ='GET')
def get_all_blogs():
    blogs = []
    for blog in Blog.query.all():
        blog_dict = {
            "id":blog.id,
            "title":blog.title,
            'content': blog.content,
            'likes': blog.likes,
            'comments': blog.comments
        }
        blogs.append(blog_dict)
    return make_response(jsonify(blogs),200)         


if __name__ == '__main__':
    app.run(port=5555, debug=True)