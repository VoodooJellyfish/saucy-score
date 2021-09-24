from operator import pos
from flask import Blueprint, jsonify, session, request
import datetime
from app.models import Sauce, Review, Collection, User, db
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy import func


review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def reviews():

    reviews = Review.query.all()

    return {review.id: review.to_dict() for review in reviews}


@review_routes.route('/<int:review_id>')
# @login_required
def review(review_id):
    review = Review.query.get(review_id)
    return review.to_dict()


@review_routes.route('', methods=["POST"])
# @login_required
def create_review():
    data = request.get_json()
    new_review = Review(
        body=data['body'],
        created_at=datetime.datetime.now(),
        rating=data['rating'],
        updated_at=datetime.datetime.now(),
        user_id=data['user_id'],
        spice_level=data['spice_level'],
        sauce_id=data['sauce_id']
    )
    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()


@review_routes.route('/<int:review_id>', methods=["PUT"])
# @login_required
def edit_review(review_id):
    data = request.get_json()
    review = Review.query.get(review_id)
    if review:
        review.body = data['body'],
        review.created_at = review.created_at,
        review.rating = data['rating'],
        review.updated_at = datetime.datetime.now(),
        review.user_id = data['user_id']
        review.spice_level = data['spice_level']
        review.sauce_id = data['sauce_id']

        db.session.commit()
        return review.to_dict()
    return {"Error": "review not found"}


@review_routes.route('/<int:review_id>', methods=["DELETE"])
# @login_required
def delete_review(review_id):
    review = Review.query.get(review_id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {"Success": "review deleted"}
    return {"Error": "review not found"}
