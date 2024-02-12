from models import db, Blog
from flask import request, jsonify, Blueprint

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/blogs', methods=['GET'])
def get_all_blogs():
    blogs = [ {"id": blog.id, "poster": blog.poster, "title": blog.title,"content": blog.content,"likes": blog.likes} for blog in db.session.query(Blog).all()]
    return jsonify(blogs), 200
