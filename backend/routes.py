from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, jwt_refresh_token_required
from models import db, User, DiaryEntry

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 400

    new_user = User(username=username, password=password)  # Password should be hashed in production
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User  registered successfully"}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username, password=password).first()  # Password should be hashed in production
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200
    return jsonify({"msg": "Invalid credentials"}), 401

@api.route('/entries', methods=['POST'])
@jwt_required()
def add_entry():
    data = request.get_json()
    title = data.get('title')
    content = data.get('content')
    user_id = get_jwt_identity()

    new_entry = DiaryEntry(title=title, content=content, user_id=user_id)
    db.session.add(new_entry)
    db.session.commit()
    return jsonify({"msg": "Entry added successfully"}), 201

@api.route('/entries', methods=['GET'])
@jwt_required()
def get_entries():
    user_id = get_jwt_identity()
    entries = DiaryEntry.query.filter_by(user_id=user_id).all()
    return jsonify([{"id": entry.id, "title": entry.title, "content": entry.content} for entry in entries]), 200

@api.route('/entries/<int:entry_id>', methods=['DELETE'])
@jwt_required()
def delete_entry(entry_id):
    entry = DiaryEntry.query.get(entry_id)
    if entry:
        db.session.delete(entry)
        db.session.commit()
        return jsonify({"msg": "Entry deleted successfully"}), 200
    return jsonify({"msg": "Entry not found"}), 404
