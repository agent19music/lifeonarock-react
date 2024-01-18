from flask import Blueprint, jsonify, request
from models import Author, db, Blog
from sqlalchemy.orm import joinedload

blog_bp = Blueprint('blog_bp', __name__)


# Fetch all blogs
@blog_bp.route('/blogs', methods=['GET'])
def get_all_blogs():
    blogs = []
    for blog in Blog.query.all():
        blog_dict = {
            "id": blog.id,
            "title": blog.title,
            'content': blog.content,
            'likes': blog.likes,
            'comments': []
        }

        for comment in blog.comments:
            comment_dict = {
                "id": comment.id,
                "content": comment.content,
                "likes": comment.likes,
                "user_id": comment.user_id,  # Add other relevant fields
            }
            blog_dict['comments'].append(comment_dict)

        blogs.append(blog_dict)

    return jsonify(blogs), 200

# Fetch a single Question
@blog_bp.route('/blogs/<int:blog_id>', methods=['GET'])
def get_blog(blog_id):
    blog = Blog.query.get(blog_id)

    if blog:
        result = {
            'id': blog.id,
            'title': blog.title,
            'content': blog.content,
            'likes': blog.likes,
            'author': {'id': blog.author.id, 'name': blog.author.name},
            'comments': [{'id': comment.id, 'content': comment.content} for comment in blog.comments]
        }
        return jsonify(result)

    return jsonify({"error": "Blog not found!"}), 404


