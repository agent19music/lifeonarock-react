from flask import Blueprint, jsonify, request
from models import Comment, db
from sqlalchemy.orm import joinedload

answer_bp = Blueprint('comment_bp', __name__)


# Create an answer
@answer_bp.route('/comments', methods=['POST'])
def create_comment():
    # data = request.json
    data = request.json 

    new_comment = Comment(content=data['content'], comment_id=data['comment_id'], user_id=1)

    db.session.add(new_comment)
    db.session.commit()

    return jsonify({'message': 'Answer created successfully'})



# Get all answers for a specific comment
@answer_bp.route('/answers/<int:comment_id>', methods=['GET'])
def get_answers_for_comment(comment_id):
    answers = Answer.query.filter_by(comment_id=comment_id).all()

    if not answers:
        return jsonify({'message': 'No answers found for the specified comment'})

    answer_list = [{'id': answer.id, 'content': answer.content, 'user_id': answer.user_id} for answer in answers]

    return jsonify({'answers': answer_list})


