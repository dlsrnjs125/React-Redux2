# React-Practice2
- react Axios를 활용한 Api 테스트
- Django-React-RESTApi Project
- table -> ag Grid
- design -> antd

## User Page
UserList
- Django에서 만든 User {name, email, age}를 get을 통해 데이터를 받아온다.

UserCreate
- Django에서 만든 User {name, email, age}를 입력받아 POST를 통해 데이터 생성

UserSearch
- User {name, age}를 통해 search 진행(age는 검색한 나이 이상 모두 조회 조건)

UserDelete
- user_id를 통해서 User의 정보를 삭제

## Book Page
BookList
- Django에서 만든 Book {title, author, publisher, price}를 get을 통해 데이터를 받아온다.

BookCreate
- Django에서 만든 Book {title, author, publisher, price}를 입력받아 POST를 통해 데이터 생성

## Order Page 
OrderList
- Django에서 만든 user_id, book_id, address, price를 get을 통해 데이터 받아온다.