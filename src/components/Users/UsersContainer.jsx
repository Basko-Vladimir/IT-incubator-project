import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onChangePage = (currentPage) => {
        this.props.setCurrentPage(this.props.pageSize, currentPage);
    };

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      isFollowUser={this.props.isFollowUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        isFollowUser: state.usersPage.isFollowUser
    }
};

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer);
