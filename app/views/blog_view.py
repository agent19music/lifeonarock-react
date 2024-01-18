from flask import Blueprint, jsonify, request
from models import Author, db, Blog
from sqlalchemy.orm import joinedload

blog_bp = Blueprint('blog_bp', __name__)


# Fetch all blogs
@blog_bp.route('/blogs', methods=['GET'])
def get_all_blogs():
    blogs =  Blog.query.all()
 
    result = []
    for blog in blogs:
        comments = blog.comments

        result.append({
            'id': blog.id,
            'title': blog.title,
            'content': blog.content,
            'likes': blog.likes,
            'author': {
                'id': blog.author.id if blog.author else None,
                'name': blog.author.username if blog.author else None
            },
            'comments': [{'id': comment.id, 'content': comment.content} for comment in comments]
        })
    return jsonify(result), 200

# Fetch a single Question
@blog_bp.route('/blogs/<int:blog_id>', methods=['GET'])
def get_question(blog_id):
    blog = Blog.query.get(blog_id)
    result = []

    if blog:
        result.append({'id': blog.id, 'title': blog.title, 
                'content': blog.content, 
                'likes': blog.likes, 
                'author': {'id': blog.author.id, 'name': blog.author.name },
                'comments': [{'id': comment.id, 'content': comment.content} for comment in blog.comments]

                       })
        return jsonify(result)
    return jsonify({"error": "Question not found!"}), 404


