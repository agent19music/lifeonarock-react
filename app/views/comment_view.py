from models import db, Comment
from flask import request, jsonify, Blueprint

comment_bp = Blueprint('comment_bp', __name__)

@comment_bp.route('/comments/<int:blog_id>', methods=['GET'])
def get_all_comments(blog_id):
    comments = Comment.query.filter_by(blog_id=blog_id).order_by(Comment.created_at.desc()).all()
    return jsonify([c.serialize for c in comments])
