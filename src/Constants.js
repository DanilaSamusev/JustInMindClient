export class Constants {

    static URGENCY = ['Low', 'Average', 'High', 'Critical'];
    static STATES = ['Draft', 'New', 'Approved', 'Declined', 'In Progress', 'Done', 'Canceled'];

    static USER_ACTIONS = {

        'Employee': {

            'Draft': {
                actions: [
                    {name: 'Submit', stateId: 2},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'Declined': {
                actions: [
                    {name: 'Submit', stateId: 2},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'Approved': {actions: []},
            'Canceled': {actions: []},
            'New': {actions: []},
            'In Progress': {actions: []},
            'Done': {actions: []},
        },

        'Manager': {

            'Draft': {
                actions: [
                    {name: 'Submit', stateId: 2},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'New': {
                actions: [
                    {name: 'Approve', stateId: 3},
                    {name: 'Decline', stateId: 4},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'Declined': {
                actions: [
                    {name: 'Submit', stateId: 2},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'Approved': {actions: []},
            'Canceled': {actions: []},
            'In Progress': {actions: []},
            'Done': {actions: []},
        },

        'Engineer': {

            'Approved': {
                actions: [
                    {name: 'Assign to me', stateId: 5},
                    {name: 'Cancel', stateId: 7},
                ],
            },

            'In Progress': {
                actions: [
                    {name: 'Done', stateId: 6},
                ],
            },

            'Draft': {actions: []},
            'New': {actions: []},
            'Declined': {actions: []},
            'Canceled': {actions: []},
            'Done': {actions: []},
        }
    };
}
