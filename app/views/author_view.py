from flask import Blueprint, jsonify, request
from models import Author, db
from sqlalchemy.orm import joinedload

authour_bp = Blueprint('author_bp', __name__)

#add author
@authour_bp.route('/author', methods=['POST'])
def create_author():
    data = request.get_json()
    new_author = Author(id=data['id'],name=data['name'],email=data['email'])

    db.session.add(new_author)
    db.session.commit()

    return jsonify({'message':'Author added successfully'})

#get all authors
@authour_bp.route('/authors')
def get_authors():
    authors = Author.query.all()
    author_list = []
    for author in authors:
        author_list.append({
            'id':author.id,
            'email': author.email,
            'name': author.name
        })
    return jsonify(author_list), 200  

#fetch single author
@authour_bp.route('/authors/<int:id>')
def get_user(id):
    author = Author.query.filter_by(id==id).first()
    author_list = []

    if author:
        author_list.append({
            'id' : author.id,
            'email': author.email,
            'name' : author.name
        })
        return jsonify(author_list), 200
    
    else:
        return jsonify({"error":"User not found!"}), 404

#update author
@authour_bp.route('/authors/<int:id>', methods=['PUT'])
def update_user(id):
    author = Author.query.get(id)
    if author:
        name = request.form.get('name')
        email = request.form.get('email')

        check_email = Author.query.filter_by(email=email).first()
        check_name = Author.query.filter_by(name=name).first()
        
        if check_email or check_email or check_name:
            return jsonify({"error": "Author email/name already exist!"})
        
        else:
            author.name = name
            author.email = email
        
            db.session.commit()
            return jsonify({"success": "Author updated successfully"}), 200

    else:
        return jsonify({"error":"Author you are trying to update doesn't exist!"}), 404
    
# delete author
@authour_bp.route("/author/<int:id>", methods=["DELETE"])
def delete_user(id):
    author = Author.query.get(id)
    
    if author:
        db.session.delete(author)
        db.session.commit()
        return jsonify({"success": "User deleted successfully"}), 200

    else:
        return jsonify({"error":"User you are trying to delete is not found!"}), 404

