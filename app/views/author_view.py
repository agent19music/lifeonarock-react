from flask import Blueprint, jsonify, request
from models import Author, db
from sqlalchemy.orm import joinedload

authour_bp = Blueprint('author_bp', __name__)

@authour_bp.route('/author', methods=['POST'])
def create_answer():
    data = request.json
    new_answer = Author(name=data['body'],)