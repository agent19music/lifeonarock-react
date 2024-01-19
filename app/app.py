#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from datetime import timedelta


from models import db,Blog
from views import *
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

Migrate(app, db)

db.init_app(app)
jwt = JWTManager()
app.config["JWT_SECRET_KEY"] = "fjhjdjhfiskyfvdgvydklvsrfl"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt.init_app(app)

app.register_blueprint(user_bp)
app.register_blueprint(blog_bp)
app.register_blueprint(authour_bp)
app.register_blueprint()
app.register_blueprint()

# JWT LOADER
@jwt.token_in_blocklist_loader
def token_in_blocklist_callback(jwt_header, jwt_data):
    jti = jwt_data['jti']
    token = TokenBlocklist.query.filter_by(jti=jti).first()
    if token:
        return token 
    else:
        return None

@app.route('/')
def home():
    return''

@app.route('/blogs', methods =['GET'])
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

@app.route('/blogs/<int:id>', methods=['GET'])
def get_blog_by_id(id):
    blog = Blog.query.filter_by(id=id).first()
    if not blog:
        return make_response(jsonify({"error":"No such blog exists"}),404)
    else :
        return make_response(jsonify(blog.__dict__), 200)


if __name__ == '__main__':
    app.run(port=5555, debug=True)