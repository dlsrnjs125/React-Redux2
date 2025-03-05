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
- User {name, email, age}를 통해 search 진행(age는 검색한 나이 이상 모두 조회 조건)

UserDelete
- user_id를 통해서 User의 정보를 삭제

## Book Page
BookList
- Django에서 만든 Book {title, author, publisher, price}를 get을 통해 데이터를 받아온다.

BookCreate
- Django에서 만든 Book {title, author, publisher, price}를 입력받아 POST를 통해 데이터 생성

BookSearch
- Django에서 만든 Book {title, author, publisher, price}를 통해 search 진행(price는 검색한 가격 이상 모두 조회 조건)

BookDelete
- Book_id를 통해서 Book의 정보를 삭제

## Order Page 
OrderList
- Django에서 만든 user_id, book_id, address, total_price, Creat_at를 get을 통해 데이터 받아온다.

OrderSearch
- Django에서 만든 User, Book {user_id, user_name, book_id, book_title}을 받아오고 book_price를 quantity와 계산하여 total_price를 만들고 created_atd을 받아와 search 진행