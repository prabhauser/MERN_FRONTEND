export const unit = {
    spacing: 4,
    searchDebounceTimer: 2000
};

export const ROLES = {
    admin: 'ADMIN',
    supervisor: 'SUPERVISOR',
    ml: 'ML',
    swa: 'SWA',
    facility: 'FACILITY'
};
export const ADMIN_TABS = [
    'Supervisors',
    'Municipal Links (ML)',
    'SWA',
    'Health Facilities',
    'Educational Facilities',
    'Households'
];
export const SUPERVISOR_TABS = [
    'Municipal Links (ML)',
    'SWA',
    'Health Facilities',
    'Educational Facilities',
    'Households'
];

export const SUPERVISOR_DETAIL_TABS = ['Municipal Links (ML)', 'SWA'];

export const MLDETAIL_TABS = [
    'Municipalities',
    'Barangays',
    'SWA',
    'Households',
    'Health Facilities',
    'Educational Facilities'
];

export const HEALTHFACILITY_DETAIL_TABS = ['Details', 'Request History'];

export const EDUCATIONALFACILITY_DETAIL_TABS = ['Details', 'Request History'];

export const HOUSEHOLD_DETAIL_TABS = ['Members', 'Updates History', 'Compliance History'];

export const HOUSEHOLD_MEMBER_DETAIL_TABS = ['Details', 'Updates History', 'Compliance History'];

export const SWADETAIL_TABS = ['Municipalities', 'Barangays', 'Health Facilities', 'Educational Facilities'];

export const REQUESTS_TABS = ['BUS Requests', 'CVS Requests'];

export const SESSION_VISITES_TABS = ['FDS Sessions', 'In Person Visits'];

export const FDS_SESSION_VISITES_TABS = ['Details', 'Members'];

export const IN_PERSON_VISIT_DETAIL = ['Detail', 'Household Members'];

export const REQUESTS_STATUS = [
    { name: 'Approval Pending', code: 'Approval Pending' },
    { name: 'Supervisor Approved', code: 'Supervisor Approved' },
    { name: 'Supervisor Rejected', code: 'Supervisor Rejected' },
    { name: 'Synced with PPIS', code: 'Synced with PPIS' }
];

export const MASTERDATA_TYPES = {
    region: 'REGION',
    province: 'PROVINCE',
    municipality: 'MUNICIPALITY',
    barangay: 'BARANGAY',
    household: 'HOUSEHOLD',
    education: 'EDUCATION',
    health: 'HEALTH',
    userStatus: 'USER_COLLECTION_STATUS',
    designation: 'DESIGNATION',
    approvalStatus: 'APPROVAL_STATUS_CODE',
    updateType: 'UPDATE_TYPE',
    gender: 'GENDER',
    gradeLevel: 'GRADE_LEVEL',
    relationToHead: 'RELATION_TO_HEAD',
    civilCode: 'CIVIL_STATUS',
    modalityCode: 'MODALITY_CODE'
};

export const ALL = 'All';

export const ALL_OBJ = { name: 'All', code: 'All' };

export const REPORTS_TABS = ['BUS Reports', 'CVS Reports', 'Sessions & Visits Report'];
