from flask import Blueprint, jsonify, request
from models import Comment, db
from sqlalchemy.orm import joinedload

comment_bp = Blueprint('comment_bp', __name__)


# Create an answer
@comment_bp.route('/comments', methods=['POST'])
def create_comment():
    # data = request.json
    data = request.json 

    new_comment = Comment(content=data['content'], comment_id=data['comment_id'], user_id=1)

    db.session.add(new_comment)
    db.session.commit()

    return jsonify({'message': 'Answer created successfully'})



# # Get all comment for a specific comment
#STILL IN DEVELOPMENT
@comment_bp.route('/blogs/<int:blog_id>', methods=['GET'])
def get_comments_for_blog(comment_id):
    comment = Comment.query.filter_by(comment_id=comment_id).all()

    if not comment:
        return jsonify({'message': 'No comment found for the specified comment'})

    answer_list = [{'id': answer.id, 'content': answer.content, 'user_id': answer.user_id} for answer in comment]

    return jsonify({'comment': answer_list})


