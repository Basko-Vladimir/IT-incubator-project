import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowUser,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selectors";

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
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        isFollowUser: getIsFollowUser(state)
    }
};

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers})(UsersContainer);

