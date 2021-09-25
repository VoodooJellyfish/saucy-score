from operator import pos
from flask import Blueprint, jsonify, session, request
import datetime
from app.models import Sauce, Review, Collection, User, db
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy import func


sauce_routes = Blueprint('sauces', __name__)


@sauce_routes.route('/')
def sauces():

    sauces = Sauce.query.all()

    return {sauce.id: sauce.to_dict() for sauce in sauces}


@sauce_routes.route('/<int:sauce_id>')
# @login_required
def sauce(sauce_id):
    sauce = Sauce.query.get(sauce_id)
    return sauce.to_dict()


@sauce_routes.route('', methods=["POST"])
# @login_required
def create_sauce():
    data = request.get_json()
    new_sauce = Sauce(
        description=data['description'],
        created_at=datetime.datetime.now(),
        name=data['name'],
        updated_at=datetime.datetime.now(),
        user_id=data['user_id'],
        image_url=data['image_url']
    )
    db.session.add(new_sauce)
    db.session.commit()
    return new_sauce.to_dict()


@sauce_routes.route('/<int:sauce_id>', methods=["PUT"])
# @login_required
def edit_sauce(sauce_id):
    data = request.get_json()
    sauce = Sauce.query.get(sauce_id)
    if sauce:
        sauce.name = data['name'],
        sauce.created_at = sauce.created_at,
        sauce.description = data['description'],
        sauce.updated_at = datetime.datetime.now(),
        sauce.user_id = data['user_id']
        sauce.image_url = data['image_url']

        db.session.commit()
        return sauce.to_dict()
    return {"Error": "sauce not found"}


@sauce_routes.route('/<int:sauce_id>', methods=["DELETE"])
# @login_required
def delete_sauce(sauce_id):
    sauce = Sauce.query.get(sauce_id)
    if sauce:
        db.session.delete(sauce)
        db.session.commit()
        return {"Success": "sauce deleted"}
    return {"Error": "sauce not found"}


# route to get all the reviewsfor a sauce
@sauce_routes.route('/<int:sauce_id>/reviews')
# @login_required
def get_sauce_reviews(sauce_id):
    reviews = Review.query.filter(Review.sauce_id == sauce_id)
    if reviews:
        return {review.id: review.to_dict() for review in reviews}
    return "No Comments"
