from models import db, Blog
from flask import request, jsonify, Blueprint

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/blogs', methods=['GET'])
def get_all_blogs():
    blogs = [blog.to_dict() for blog in db.session.query(Blog).all()]
    return jsonify(blogs), 200