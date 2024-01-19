from models import db, User,TokenBlocklist
from flask import request, jsonify, Blueprint
from werkzeug.security import check_password_hash

auth_bp = Blueprint('auth_bp', __name__)

# routes
# add user
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    user = User.query.filter_by(username = username).first()

    if user:
        if check_password_hash(user.password, password):
            access_token = create_access_token(identity=user.id)
            return jsonify(access_token = access_token)
        
        return jsonify({"error": "Wrong Password!"}), 401

    else:
        return jsonify({"error": "User doesn't exist!"}), 404