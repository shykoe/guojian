export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const SET_ROLE = 'SET_ROLE';
export const UNSET_ROLE = 'UNSET_ROLE';
export function setLoggedUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function unsetLoggedUser() {
  return {
    type: UNSET_USER,
  };
}
export function setLoggedUserRole(role){
	return{
		type:SET_ROLE,
		role,
	}
}
export function unsetLoggedUserRole(){
	return{
		type:SET_ROLE,
	}
}
