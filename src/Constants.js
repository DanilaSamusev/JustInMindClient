export class Constants {

    static URGENCY = ['Low', 'Average', 'High', 'Critical'];
    static STATES = ['Draft', 'New', 'Approved', 'Declined', 'In Progress', 'Done', 'Canceled'];

    static USER_ACTIONS = {

        'Employee': {

            'Draft': {
                actions: [
                    {name: 'Submit', stateId: 1},
                    {name: 'Cancel', stateId: 6},
                ],
            },

            'Declined': {
                actions: [
                    {name: 'Submit', stateId: 1},
                    {name: 'Cancel', stateId: 6},
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
                    {name: 'Submit', stateId: 1},
                    {name: 'Cancel', stateId: 6},
                ],
            },

            'New': {
                actions: [
                    {name: 'Approve', stateId: 2},
                    {name: 'Decline', stateId: 3},
                    {name: 'Cancel', stateId: 6},
                ],
            },

            'Declined': {
                actions: [
                    {name: 'Submit', stateId: 1},
                    {name: 'Cancel', stateId: 6},
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
                    {name: 'Assign', stateId: 4},
                    {name: 'Cancel', stateId: 6},
                ],
            },

            'In Progress': {
                actions: [
                    {name: 'Done', stateId: 5},
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
