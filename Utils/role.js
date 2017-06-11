export const roleMap = (roleNum) =>{
	switch(roleNum){
		case 1:
			return 'admin';
		case 6:
			return 'agent';
		case 7:
			return 'keeper';
		case 8:
			return 'assigner';
		case 9:
			return 'tester';
		case 20:
			return 'normal';
		case 30:
			return 'disabled';
		case 31:
			return 'deleted';
		default:
			return null;
	}
}