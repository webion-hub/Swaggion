
export type AccountCompanyDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly logoUrl?: string
	readonly userRole: CompanyRole
}



export type GetAllAccountCompaniesResponse = {
	readonly companies?: readonly AccountCompanyDto[]
}



export type GetAccountCompanyVerificationInfoResponse = {
	readonly firstName?: string
	readonly lastName?: string
	readonly notes?: string
}



export type UpsertAccountCompanyVerificationInfoRequest = {
	/** Max length 128, Min length 1 */
	readonly firstName: string
	/** Max length 128, Min length 1 */
	readonly lastName: string
	/** Max length 256 */
	readonly notes?: string
}



export type DeleteAccountRequest = {
	/** Min length 1 */
	readonly password: string
}



export type ClaimDto = {
	readonly issuer?: string
	readonly type?: string
	readonly value?: string
}



export type GetAccountInfoResponse = {
	/** Format uuid */
	readonly id: string
	readonly emailAddress?: string
	readonly phoneNumber?: string
	readonly avatarUrl?: string
	readonly userName?: string
	readonly firstName?: string
	readonly lastName?: string
	readonly storeId?: string
	readonly referentId?: string
	readonly mistralUsername?: string
	readonly roles?: readonly string[]
	readonly claims?: readonly ClaimDto[]
	readonly loginProviders?: readonly string[]
	readonly hasPassword: boolean
	readonly isPhoneConfirmed: boolean
	readonly isEmailConfirmed: boolean
}



export type UpdateAccountEmailRequest = {
	/** Format email, Min length 1 */
	readonly email: string
}



export type UpdateAccountNamesRequest = {
	/** Max length 128, Min length 1 */
	readonly firstName: string
	/** Max length 128, Min length 1 */
	readonly lastName: string
}



export type UpdateAccountPhoneNumberRequest = {
	/** Min length 1 */
	readonly phoneNumber: string
}



export type GetAllAccountInviteDto = {
	/** Format uuid */
	readonly id: string
	/** Format uuid */
	readonly companyId: string
	readonly companyName?: string
	readonly companyLogo?: string
	readonly role: CompanyRole
	/** Format date-time */
	readonly createdAtUtc: string
	/** Format date-time */
	readonly expiresAtUtc: string
	readonly accepted: boolean
	readonly notes?: string
}



export type GetAllAccountInvitesResponse = {
	readonly invites?: readonly GetAllAccountInviteDto[]
}



export type ChangeAccountPasswordRequest = {
	/** Min length 1 */
	readonly oldPassword: string
	/** Min length 1 */
	readonly newPassword: string
}



export type BeginAccountResetPasswordRequest = {
	/** Format email, Min length 1 */
	readonly emailAddress: string
}



export type EndAccountResetPassworRequest = {
	/** Format uuid */
	readonly userId: string
	/** Min length 1 */
	readonly newPassword: string
	/** Min length 1 */
	readonly resetPasswordToken: string
}



export type SetAccountPasswordRequest = {
	/** Min length 1 */
	readonly password: string
}



export type AccountSignInRequest = {
	/** Min length 1 */
	readonly username: string
	/** Min length 1 */
	readonly password: string
	/** Format uuid */
	readonly clientId: string
	/** Min length 1 */
	readonly clientSecret: string
}



export type AccountSignInResponse = {
	readonly accessToken?: string
	readonly refreshToken?: string
}



export type AccountSignUpRequest = {
	/** Min length 1 */
	readonly name: string
	/** Min length 1 */
	readonly surname: string
	/** Format email */
	readonly emailAddress?: string
	readonly phoneNumber?: string
	/** Min length 8 */
	readonly password: string
	readonly generalConditions: boolean
	readonly privacyPolicy: boolean
	readonly marketingConsent: boolean
	/** Format uuid */
	readonly clientId: string
	/** Min length 1 */
	readonly clientSecret: string
}



export type AccountSignUpResponse = {
	readonly accessToken?: string
	readonly refreshToken?: string
}



export type PatchUserStoreRequest = {
	/** Min length 1 */
	readonly storeId: string
}



export type CheckVatNumberRequest = {
	/** Min length 1 */
	readonly vatNumber: string
}



export type CheckVatNumberResponse = {
	readonly isEternooClient: boolean
	readonly vatNumber?: string
	readonly denomination?: string
	readonly address?: string
	readonly fiscalCode?: string
}



export type EndAccountEmailVerificationRequest = {
	/** Min length 1 */
	readonly token: string
}



export type EndAccountPhoneNumberVerificationRequest = {
	/** Min length 1 */
	readonly token: string
}



export type MistralSignInRequest = {
	/** Min length 1 */
	readonly username: string
	/** Min length 6 */
	readonly password: string
	/** Format uuid */
	readonly clientId: string
	/** Format byte, Min length 1 */
	readonly clientSecret: string
}



export type CreateCompanyRequest = {
	/** Min length 1 */
	readonly vatNumber: string
	/** Min length 1 */
	readonly denomination: string
	/** Max length 150, Min length 1 */
	readonly address: string
	/** Max length 16, Min length 1 */
	readonly fiscalCode: string
	/** Format int64 */
	readonly clientCode?: number
}



export type CreateCompanyResponse = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
}



export type GetAllCompanyInvoiceDto = {
	/** Format int32 */
	readonly id: number
	readonly name?: string
	/** Format date-time */
	readonly date: string
	readonly documentCode?: string
	/** Format int64 */
	readonly number: number
	readonly siteLocation?: string
	/** Format int64 */
	readonly invoiceNumber: number
	/** Format double */
	readonly value: number
}



export type GetAllCompanyInvoicesResponse = {
	readonly results?: readonly GetAllCompanyInvoiceDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCompanyTransportDocumentDto = {
	/** Format int32 */
	readonly id: number
	readonly name?: string
	/** Format date-time */
	readonly date: string
	readonly code?: string
	/** Format int32 */
	readonly number: number
	readonly siteLocation?: string
	/** Format int32 */
	readonly invoiceNumber: number
	/** Format double */
	readonly value: number
}



export type GetAllCompanyTransportDocumentsResponse = {
	readonly results?: readonly GetAllCompanyTransportDocumentDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCompanyEteCardResponse = {
	readonly ean13Code?: string
}



export type RetrieveUserInfoFromBarcodeResponse = {
	readonly fullName?: string
	readonly denomination?: string
}



export type GetCompanyResponse = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly vatNumber?: string
	readonly verified: boolean
	readonly verificationStatus: CompanyVerificationStatus
	readonly logoUrl?: string
	readonly userRole: CompanyRole
	/** Format int32 */
	readonly members: number
	readonly isOwner: boolean
}



export type MockGetAllCompanyInvoicesResponse = {
	readonly results?: readonly MockInvoiceDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockInvoiceDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	/** Format date-time */
	readonly date: string
	readonly documentCode?: string
	/** Format int32 */
	readonly number: number
	readonly siteLocation?: string
	/** Format int32 */
	readonly invoiceNumber: number
	/** Format double */
	readonly value: number
}



export type MockCompanyTransportDocumentDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	/** Format date-time */
	readonly date: string
	readonly category?: string
	readonly code?: string
	/** Format int32 */
	readonly number: number
	readonly siteLocation?: string
	/** Format int32 */
	readonly invoiceNumber: number
	/** Format double */
	readonly value: number
}



export type MockGetAllCompanyTransportDocumentsResponse = {
	readonly results?: readonly MockCompanyTransportDocumentDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockGetAllCompanySiteDto = {
	/** Format uuid */
	readonly id: string
	readonly fullAddress?: string
	readonly cigCode?: string
	readonly cupCode?: string
}



export type MockGetAllCompanySitesResponse = {
	readonly results?: readonly MockGetAllCompanySiteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockUpdateCompanySiteRequest = {
	/** Max length 10 */
	readonly cigCode?: string
	/** Max length 15 */
	readonly cupCode?: string
}



export type GetAllCompanyStaffDto = {
	/** Format uuid */
	readonly id: string
	/** Format uuid */
	readonly userId: string
	readonly imageUrl?: string
	readonly emailAddress?: string
	readonly name?: string
	readonly notes?: string
	/** Format date-time */
	readonly joinedAt: string
	readonly role: CompanyRole
}



export type GetAllCompanyStaffResponse = {
	readonly results?: readonly GetAllCompanyStaffDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCompanyStaffInviteDto = {
	/** Format uuid */
	readonly id: string
	readonly emailAddress?: string
	/** Format date-time */
	readonly createdAtUtc: string
	/** Format date-time */
	readonly expiresAtUtc: string
	readonly role: CompanyRole
	readonly notes?: string
}



export type GetAllCompanyStaffInvitesResponse = {
	readonly invites?: readonly GetAllCompanyStaffInviteDto[]
}



export type InviteUserToCompanyStaffRequest = {
	/** Format email, Min length 1 */
	readonly emailAddress: string
	readonly role: CompanyRole
	/** Max length 150 */
	readonly notes?: string
}



export type UpdateCompanyStaffInviteRequest = {
	readonly role: CompanyRole
	/** Max length 150 */
	readonly notes?: string
}



export type UpdateCompanyStaffMemberRequest = {
	readonly role: CompanyRole
	/** Max length 1028 */
	readonly notes?: string
}



export type UpdateCompanyRequest = {
	/** Max length 256, Min length 1 */
	readonly name: string
}



export type GetAllCompanyWorksiteDto = {
	readonly id?: string
	readonly address?: string
	readonly cig?: string
	readonly cup?: string
}



export type GetAllCompanyWorksitesResponse = {
	readonly results?: readonly GetAllCompanyWorksiteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type UpdateCompanyWorksiteRequest = {
	/** Min length 1 */
	readonly cigCode: string
	/** Min length 1 */
	readonly cupCode: string
}



export type RefreshTokenRequest = {
	/** Format uuid */
	readonly userId: string
	/** Min length 1 */
	readonly refreshToken: string
}



export type RefreshTokenResponse = {
	readonly accessToken?: string
	readonly refreshToken?: string
}



export type ExchangeTokenResponse = {
	readonly accessToken?: string
	readonly refreshToken?: string
}



export type GetDashboardCompanyResponse = {
	readonly logoUrl?: string
	readonly name?: string
	/** Format date-time */
	readonly createdAt: string
	readonly vatNumber?: string
	readonly address?: string
	readonly fiscalCode?: string
}



export type GetAllDashboardCompaniesResponse = {
	readonly results?: readonly GetAllDashboardCompanyDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllDashboardCompanyDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly logoUrl?: string
	/** Format date-time */
	readonly createdAt: string
	readonly verificationStatus: CompanyVerificationStatus
	readonly verificationMethod: CompanyVerificationMethod
	/** Format date-time */
	readonly verifiedAt?: string
}



export type GetAllDashboardCompanyLightReportDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly description?: string
	/** Format double */
	readonly size: number
	readonly contentType?: string
}



export type GetAllDashboardCompanyLightReportsResponse = {
	readonly reports?: readonly GetAllDashboardCompanyLightReportDto[]
}



export type GetAllDashboardCompanyStaffDto = {
	/** Format uuid */
	readonly id: string
	readonly imageUrl?: string
	readonly emailAddress?: string
	readonly name?: string
	/** Format date-time */
	readonly joinedAt: string
	readonly role: CompanyRole
}



export type GetAllDashboardCompanyStaffResponse = {
	readonly results?: readonly GetAllDashboardCompanyStaffDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCompanyCreatedByDto = {
	readonly avatarUrl?: string
	readonly firstName?: string
	readonly lastName?: string
}



export type GetDashboardCompanyVerificationStatusResponse = {
	readonly createdBy: GetCompanyCreatedByDto
	readonly status: CompanyVerificationStatus
	readonly method: CompanyVerificationMethod
	/** Format date-time */
	readonly verifiedAt?: string
	readonly legalRepresentative?: string
	readonly notes?: string
	readonly files?: readonly VerificationFileDto[]
}



export type VerificationFileDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly contentType?: string
	/** Format double */
	readonly size: number
}



export type UpdateDashboardCompanyVerificationStatusRequest = {
	readonly status: CompanyVerificationStatus
	/** Max length 200 */
	readonly notes?: string
}



export type GetCrmCustomerCervedGroupScoreResponse = {
	readonly score: CervedCgsScore
	/** Format int32 */
	readonly scoreValue?: number
}



export type GetAllCrmCustomerCervedLightReportsPdfDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	/** Format date-time */
	readonly createdAt: string
	/** Format int64 */
	readonly sizeInBytes: number
	readonly downloadUrl?: string
}



export type GetAllCrmCustomerCervedLightReportsPdfResponse = {
	readonly results?: readonly GetAllCrmCustomerCervedLightReportsPdfDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCrmCustomerCervedRiskClassResponse = {
	readonly riskClass: EooScoreRiskClass
	/** Format int32 */
	readonly level: number
}



export type AddCrmCustomerContactRequest = {
	/** Max length 40, Min length 1 */
	readonly name: string
	/** Max length 3, Min length 1 */
	readonly departmentId: string
	/** Max length 15 */
	readonly mobilePhoneNumber?: string
	/** Max length 15 */
	readonly telephoneNumber?: string
	/** Format email, Max length 50 */
	readonly email?: string
	readonly marketingConsent: boolean
	/** Max length 100 */
	readonly notes?: string
	/** Max length 10 */
	readonly jobTitle?: string
	/** Format date-time */
	readonly birthDate?: string
}



export type AddCrmCustomerContactResponse = {
	readonly id?: string
}



export type AutocompleteCrmCustomerContactsDepartmentDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteCrmCustomerContactsDepartmentsResponse = {
	readonly departments?: readonly AutocompleteCrmCustomerContactsDepartmentDto[]
}



export type GetCrmCustomerContactResponse = {
	readonly id?: string
	readonly customerImageUrl?: string
	readonly customerName?: string
	readonly imageUrl?: string
	readonly fullName?: string
	readonly departmentId?: string
	readonly departmentName?: string
	readonly mobilePhoneNumber?: string
	readonly telephoneNumber?: string
	readonly emailAddress?: string
	readonly notes?: string
	readonly marketingConsent: boolean
}



export type GetAllCrmCustomerContactDto = {
	readonly id?: string
	readonly departmentId?: string
	readonly fullName?: string
	readonly departmentName?: string
	readonly mobilePhoneNumber?: string
	readonly telephoneNumber?: string
	readonly emailAddress?: string
	readonly notes?: string
	readonly marketingConsent: boolean
}



export type GetAllCrmCustomerContactsResponse = {
	readonly results?: readonly GetAllCrmCustomerContactDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCrmCustomerContactsSummaryItemDto = {
	readonly id?: string
	readonly fullName?: string
	/** Format date-time */
	readonly birthDate?: string
	readonly mobilePhoneNumber?: string
	readonly telephoneNumber?: string
	readonly emailAddress?: string
	readonly notes?: string
	readonly hasMobilePhoneNumber: boolean
	readonly hasTelephoneNumber: boolean
	readonly hasEmailAddress: boolean
}



export type GetCrmCustomerContactsSummaryResponse = {
	readonly owner: GetCrmCustomerContactsSummaryItemDto
	readonly salesDirector: GetCrmCustomerContactsSummaryItemDto
}



export type UpdateCrmCustomerContactRequest = {
	/** Max length 40, Min length 1 */
	readonly name: string
	/** Max length 3, Min length 1 */
	readonly departmentId: string
	/** Max length 15, Min length 1 */
	readonly mobilePhoneNumber: string
	/** Max length 15, Min length 1 */
	readonly telephoneNumber: string
	/** Format email, Max length 50, Min length 1 */
	readonly email: string
	readonly marketingConsent: boolean
	/** Max length 100, Min length 1 */
	readonly notes: string
	/** Max length 10, Min length 1 */
	readonly jobTitle: string
	/** Format date-time */
	readonly birthDate?: string
}



export type CrmCustomerDocumentRowDto = {
	/** Format int32 */
	readonly rowId: number
	readonly supplierName?: string
	readonly imageUrl?: string
	readonly productId?: string
	readonly name?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
	/** Format double */
	readonly totalPercentageDiscount: number
	/** Format double */
	readonly totalAmount: number
	readonly supportsDecimals: boolean
}



export type GetCrmCustomerRecentActivitiesDto = {
	readonly type: CrmCustomerRecentActivityType
	readonly dateTimeText?: string
	/** Format date-time */
	readonly createdAt: string
	readonly data?: any
}



export type GetCrmCustomerResponse = {
	readonly name?: string
	readonly imageUrl?: string
	readonly referentId?: string
	readonly referentName?: string
	readonly vatNumber?: string
	readonly fiscalCode?: string
	readonly telephoneNumber?: string
	readonly email?: string
	readonly website?: string
	readonly subjectType: string
	readonly subjectDescription?: string
	readonly score: CervedCgsScore
	readonly address?: string
	readonly location?: string
	readonly provinceCode?: string
	readonly provinceName?: string
	readonly paymentId?: string
	readonly paymentDescription?: string
	readonly recentActivities?: readonly GetCrmCustomerRecentActivitiesDto[]
}



export type GetAllCrmCustomersFiltersCervedCgsScoreDto = {
	/** Format int32 */
	readonly score: number
	readonly scoreName: CervedCgsScore
}



export type GetAllCrmCustomersFiltersProvinceDto = {
	readonly code?: string
	readonly name?: string
}



export type GetAllCrmCustomersFiltersResponse = {
	readonly scores?: readonly GetAllCrmCustomersFiltersCervedCgsScoreDto[]
	readonly provinces?: readonly GetAllCrmCustomersFiltersProvinceDto[]
	readonly subjectTypes?: readonly GetAllCrmCustomersFiltersSubjectTypeDto[]
}



export type GetAllCrmCustomersFiltersSubjectTypeDto = {
	readonly type: string
	readonly description?: string
}



export type GetAllCrmCustomerDto = {
	readonly id?: string
	readonly name?: string
	readonly imageUrl?: string
	readonly website?: string
	readonly referentId?: string
	readonly vatNumber?: string
	readonly subjectType: string
	readonly subjectDescription?: string
	readonly score: CervedCgsScore
	readonly provinceCode?: string
	readonly provinceName?: string
	readonly paymentId?: string
	readonly paymentDescription?: string
	readonly location?: string
}



export type GetAllCrmCustomersResponse = {
	readonly results?: readonly GetAllCrmCustomerDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCrmCustomersReferentDto = {
	readonly id?: string
	readonly name?: string
}



export type GetAllCrmCustomersReferentsResponse = {
	readonly results?: readonly GetAllCrmCustomersReferentDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCrmCustomerCreditSummaryInfoDto = {
	/** Format double */
	readonly baseCreditLine: number
	/** Format double */
	readonly utilizedCreditLine: number
	/** Format double */
	readonly utilizedCreditLinePercentage: number
	/** Format double */
	readonly accountingBalance: number
	/** Format double */
	readonly currencyExposure: number
	/** Format double */
	readonly deliveryNotesAmount: number
	/** Format double */
	readonly openOrdersAmount: number
	/** Format double */
	readonly totalOverdueAmount: number
}



export type GetCrmCustomerHomeDetailsDto = {
	readonly id?: string
	readonly name?: string
	readonly imageUrl?: string
	readonly referentId?: string
	readonly referentName?: string
	readonly vatNumber?: string
	readonly fiscalCode?: string
	readonly subjectType: string
	readonly subjectDescription?: string
	readonly email?: string
	readonly telephoneNumber?: string
	readonly score: CervedCgsScore
	readonly website?: string
	readonly address?: string
	readonly location?: string
	readonly provinceCode?: string
	readonly provinceName?: string
	readonly paymentId?: string
	readonly paymentDescription?: string
}



export type GetCrmCustomerHomeResponse = {
	readonly details: GetCrmCustomerHomeDetailsDto
	readonly creditSummaryInfo: GetCrmCustomerCreditSummaryInfoDto
}



export type GetCrmCustomerOrderResponse = {
	readonly name?: string
	readonly createdByUsername?: string
	readonly storeId?: string
	/** Format date-time */
	readonly date: string
	readonly rows?: readonly CrmCustomerDocumentRowDto[]
}



export type AutocompleteCrmCustomerOrdersStoreDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteCrmCustomerOrdersStoresResponse = {
	readonly stores?: readonly AutocompleteCrmCustomerOrdersStoreDto[]
}



export type AutocompleteCrmCustomerOrdersUserDto = {
	readonly id?: string
	readonly fullName?: string
}



export type AutocompleteCrmCustomerOrdersUsersResponse = {
	readonly users?: readonly AutocompleteCrmCustomerOrdersUserDto[]
}



export type GetAllCrmCustomerOrderDto = {
	/** Format int32 */
	readonly protocolId: number
	readonly name?: string
	readonly status: CrmCustomerOrderStatus
	/** Format date-time */
	readonly date: string
	/** Format date-time */
	readonly deliveryDate: string
	readonly storeId?: string
	readonly location?: string
	readonly reference?: string
	readonly createdByUsername?: string
	/** Format double */
	readonly amount: number
	/** Format double */
	readonly residue: number
}



export type GetAllCrmCustomerOrdersResponse = {
	readonly results?: readonly GetAllCrmCustomerOrderDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
	/** Format double */
	readonly totalAmount: number
}



export type AutocompleteCustomerWorksitesCreateCrmCustomerQuoteDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteCustomerWorksitesCreateCrmCustomerQuoteResponse = {
	readonly results?: readonly AutocompleteCustomerWorksitesCreateCrmCustomerQuoteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type AutocompletePaymentMethodCreateCrmCustomerQuoteResponse = {
	readonly results?: readonly MockAutocompletePaymentMethodCreateCrmCustomerQuoteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockAutocompletePaymentMethodCreateCrmCustomerQuoteDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteStoreCreateCrmCustomerQuoteResponse = {
	readonly results?: readonly MockAutocompleteStoreCreateCrmCustomerQuoteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockAutocompleteStoreCreateCrmCustomerQuoteDto = {
	readonly id?: string
	readonly name?: string
}



export type CreateCrmCustomerQuoteRequest = {
	/** Min length 1 */
	readonly storeId: string
	/** Min length 1 */
	readonly paymentMethodId: string
	/** Min length 1 */
	readonly name: string
	readonly deliveryAddressId?: string
	/** Format date-time */
	readonly deliveryDate?: string
	/** Format date-time */
	readonly expirationDate?: string
}



export type CreateCrmCustomerQuoteResponse = {
	/** Format int32 */
	readonly protocolId: number
}



export type GetCrmCustomerQuoteDetailProductDto = {
	/** Format int32 */
	readonly rowId: number
	readonly id?: string
	readonly imageUrl?: string
	readonly name?: string
	readonly supplierName?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
	/** Format double */
	readonly totalPrice: number
	/** Format double */
	readonly totalPercentageDiscount: number
	readonly supportsDecimals: boolean
}



export type GetCrmCustomerQuoteDetailResponse = {
	readonly results?: readonly GetCrmCustomerQuoteDetailProductDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
	readonly location?: string
	readonly customerName?: string
	readonly customerImageUrl?: string
	readonly name?: string
	readonly accessCode?: string
}



export type CrmCustomerProductQuoteInfoDto = {
	readonly imageUrls?: readonly string[]
	readonly discountClassId?: string
	/** Format double */
	readonly unitPrice: number
	/** Format double */
	readonly currentQuoteQuantity: number
	readonly summary: CrmCustomerProductQuoteInfoSummaryDto
}



export type CrmCustomerProductQuoteInfoSummaryDto = {
	/** Format double */
	readonly totalPrice: number
	/** Format int32 */
	readonly palletsCount: number
	/** Format int32 */
	readonly packagesCount: number
	/** Format double */
	readonly totalQuantity: number
}



export type AutocompleteProductsEditCrmCustomerQuoteProductDto = {
	readonly id?: string
	readonly name?: string
	readonly supportsDecimal: boolean
	/** Format double */
	readonly availablePackageQuantity: number
	readonly productImageUrl?: string
}



export type AutocompleteProductsEditCrmCustomerQuoteResponse = {
	readonly results?: readonly AutocompleteProductsEditCrmCustomerQuoteProductDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type EditCrmCustomerQuoteRequest = {
	/** Min length 1 */
	readonly customerId: string
	/** Format int32 */
	readonly protocolId: number
	/** Min length 1 */
	readonly productId: string
	/** Format double */
	readonly packageQuantity: number
}



export type EditCrmCustomerQuoteResponse = {
	/** Format int32 */
	readonly rowId: number
	readonly id?: string
	readonly imageUrl?: string
	readonly name?: string
	readonly supplierName?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
	/** Format double */
	readonly totalPrice: number
	/** Format double */
	readonly totalPercentageDiscount: number
}



export type GetCrmCustomerQuoteResponse = {
	readonly name?: string
	readonly createdByUsername?: string
	readonly storeId?: string
	/** Format date-time */
	readonly date: string
	readonly rows?: readonly CrmCustomerDocumentRowDto[]
}



export type AutocompleteCrmCustomerQuotesUserDto = {
	readonly id?: string
	readonly fullName?: string
}



export type AutocompleteCrmCustomerQuotesUsersResponse = {
	readonly users?: readonly AutocompleteCrmCustomerQuotesUserDto[]
}



export type GetAllCrmCustomerQuotesResponse = {
	readonly results?: readonly GetAllCrmCustomerQuotesResponse+QuoteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCrmCustomerQuotesResponse+QuoteDto = {
	/** Format int32 */
	readonly protocolId: number
	readonly storeId?: string
	readonly name?: string
	readonly location?: string
	/** Format date-time */
	readonly date: string
	/** Format double */
	readonly amount: number
	readonly status: CrmCustomerQuoteStatus
	readonly seenByClient: boolean
	/** Format date-time */
	readonly expirationDate?: string
	readonly accessCode?: string
	readonly products?: readonly GetAllCrmCustomerQuotesResponse+QuoteProductDto[]
}



export type GetAllCrmCustomerQuotesResponse+QuoteProductDto = {
	readonly id?: string
	readonly description?: string
	readonly imageUrl?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
}



export type GetCrmCustomerQuoteHeaderInfoResponse = {
	readonly customerName?: string
	readonly customerImageUrl?: string
	readonly location?: string
	readonly quoteName?: string
	readonly paymentMethodId?: string
	readonly paymentMethodDescription?: string
}



export type GetPreviewCrmCustomerQuoteResponse = {
	readonly storeId?: string
	readonly storeName?: string
	readonly storePhoneNumber?: string
	readonly deliveryAddressId?: string
	readonly deliveryAddress?: string
	/** Format date-time */
	readonly deliveryDate?: string
	/** Format date-time */
	readonly expirationDate?: string
	readonly paymentMethodId?: string
	readonly paymentMethodDescription?: string
	readonly referentId?: string
	readonly referentName?: string
	readonly referentPhoneNumber?: string
	readonly referentEmailAddress?: string
	/** Format double */
	readonly totalRoundedNetPrice: number
	readonly products?: readonly GetPreviewCrmCustomerQuoteResponse+ProductDto[]
}



export type GetPreviewCrmCustomerQuoteResponse+ProductDto = {
	/** Format int32 */
	readonly rowId: number
	readonly productId?: string
	readonly productName?: string
	readonly imageUrl?: string
	readonly supplierId?: string
	readonly supplierName?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
	/** Format double */
	readonly grossPrice: number
	/** Format double */
	readonly percentageDiscount: number
	/** Format double */
	readonly netPrice: number
	/** Format double */
	readonly roundedNetPrice: number
	/** Format double */
	readonly amount: number
}



export type GetProductPreviewCrmCustomerQuoteResponse = {
	readonly name?: string
	readonly imageUrl?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
	readonly supplierName?: string
	/** Format double */
	readonly netPrice: number
	/** Format double */
	readonly packageQuantity?: number
	readonly barcode?: string
	readonly datasheetUrl?: string
}



export type AutocompleteCrmCustomerQuoteProductsToAddDiscountClassDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteCrmCustomerQuoteProductsToAddDiscountClassesResponse = {
	readonly classes?: readonly AutocompleteCrmCustomerQuoteProductsToAddDiscountClassDto[]
}



export type AutocompleteCrmCustomerQuoteProductsToAddSupplierDto = {
	readonly id?: string
	readonly name?: string
}



export type AutocompleteCrmCustomerQuoteProductsToAddSuppliersResponse = {
	readonly suppliers?: readonly AutocompleteCrmCustomerQuoteProductsToAddSupplierDto[]
}



export type GetCrmCustomerQuoteProductToAddResponse = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	readonly quotes: CrmCustomerProductQuoteInfoDto
}



export type GetAllCrmCustomerQuoteProductsToAddDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	readonly quotes: CrmCustomerProductQuoteInfoDto
}



export type GetAllCrmCustomerQuoteProductsToAddResponse = {
	readonly results?: readonly GetAllCrmCustomerQuoteProductsToAddDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCrmCustomerQuoteProductsToAddMostSoldProductsInDiscountClassDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	readonly quotes: CrmCustomerProductQuoteInfoDto
}



export type GetAllCrmCustomerQuoteProductsToAddMostSoldProductsInDiscountClassResponse = {
	readonly results?: readonly GetAllCrmCustomerQuoteProductsToAddMostSoldProductsInDiscountClassDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type EditRowOrderCrmCustomerQuoteRequest = {
	/** Min length 1 */
	readonly customerId: string
	/** Format int32 */
	readonly protocolId: number
	/** Format int32 */
	readonly oldRowId: number
	/** Format int32 */
	readonly newRowId: number
}



export type GetCrmCustomerSaleResponse = {
	readonly name?: string
	readonly createdByUsername?: string
	readonly storeId?: string
	/** Format date-time */
	readonly date: string
	readonly rows?: readonly CrmCustomerDocumentRowDto[]
}



export type AutocompleteCrmCustomerSalesUserDto = {
	readonly id?: string
	readonly fullName?: string
}



export type AutocompleteCrmCustomerSalesUsersResponse = {
	readonly users?: readonly AutocompleteCrmCustomerSalesUserDto[]
}



export type GetAllCrmCustomerSaleDto = {
	/** Format int32 */
	readonly protocolId: number
	readonly name?: string
	/** Format date-time */
	readonly date: string
	readonly storeId?: string
	readonly location?: string
	readonly reference?: string
	readonly createdByUsername?: string
	/** Format double */
	readonly amount: number
}



export type GetAllCrmCustomerSalesResponse = {
	readonly results?: readonly GetAllCrmCustomerSaleDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetCrmCustomerSoldProductPreviewResponse = {
	readonly productId?: string
	readonly supplierId?: string
	readonly supplierProductId?: string
	readonly description?: string
	readonly imageUrl?: string
	readonly supplierName?: string
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly packageQuantity: number
	readonly measurementUnit?: string
	readonly barcode?: string
	readonly datasheetUrl?: string
}



export type GetCrmCustomerSoldProductQuantitiesInfoResponse = {
	readonly results?: readonly GetCrmCustomerSoldProductQuantitiesInfoRowDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
	readonly productDescription?: string
	readonly productImageUrl?: string
	readonly measurementUnit?: string
	readonly customerName?: string
	readonly customerImageUrl?: string
	/** Format int32 */
	readonly salesCount: number
	/** Format double */
	readonly totalQuantity: number
	/** Format int32 */
	readonly documentsCount: number
}



export type GetCrmCustomerSoldProductQuantitiesInfoRowDto = {
	readonly id?: string
	/** Format int32 */
	readonly protocolId: number
	/** Format int32 */
	readonly rowId: number
	readonly supplierId?: string
	readonly supplierName?: string
	readonly documentName?: string
	/** Format date-time */
	readonly documentDate: string
	/** Format double */
	readonly quantity: number
	/** Format double */
	readonly amount: number
}



export type AutocompleteCrmCustomerSoldProductsSupplierDto = {
	readonly id?: string
	readonly fullName?: string
}



export type AutocompleteCrmCustomerSoldProductsSuppliersResponse = {
	readonly suppliers?: readonly AutocompleteCrmCustomerSoldProductsSupplierDto[]
}



export type GetAllCrmCustomerSoldProductDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly imageUrl?: string
	readonly supplierId?: string
	readonly supplierName?: string
	/** Format int32 */
	readonly soldCount: number
	readonly measurementUnit?: string
	/** Format double */
	readonly quantity: number
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly numberOfPackages: number
	/** Format double */
	readonly averageNetPrice: number
	/** Format double */
	readonly suggestedPrice: number
	/** Format double */
	readonly basePrice: number
	/** Format double */
	readonly amount: number
	/** Format double */
	readonly returnedQuantity: number
}



export type GetAllCrmCustomerSoldProductsResponse = {
	readonly results?: readonly GetAllCrmCustomerSoldProductDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
	/** Format double */
	readonly totalAmount: number
	/** Format double */
	readonly totalReturnedQuantity: number
	/** Format double */
	readonly totalBasePrice: number
}



export type GetCrmKpiActiveCustomersResponse = {
	/** Format int32 */
	readonly activeCount: number
	/** Format int32 */
	readonly totalCount: number
}



export type GetAllCrmQuotesResponse = {
	readonly results?: readonly GetAllCrmQuotesResponse+QuoteDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetAllCrmQuotesResponse+QuoteDto = {
	/** Format int32 */
	readonly protocolId: number
	readonly storeId?: string
	readonly customerName?: string
	readonly customerId?: string
	readonly name?: string
	readonly location?: string
	/** Format date-time */
	readonly date: string
	/** Format double */
	readonly amount: number
	readonly status: CrmCustomerQuoteStatus
	readonly seenByClient: boolean
	/** Format date-time */
	readonly expirationDate?: string
	readonly products?: readonly GetAllCrmQuotesResponse+QuoteProductDto[]
	readonly accessCode?: string
}



export type GetAllCrmQuotesResponse+QuoteProductDto = {
	readonly id?: string
	readonly description?: string
	readonly imageUrl?: string
	/** Format double */
	readonly quantity: number
	readonly measurementUnit?: string
}



export type GetDashboardCustomersCardsResponse = {
	/** Format int32 */
	readonly clientsCount: number
	/** Format int32 */
	readonly clientsWithPricesCount: number
	/** Format int32 */
	readonly discountsCount: number
	/** Format int32 */
	readonly netPricesCount: number
}



export type GetDashboardDiscountClassResponse = {
	readonly name?: string
}



export type DashboardDiscountClassDto = {
	readonly id?: string
	readonly name?: string
}



export type GetAllDashboardDiscountClassesResponse = {
	readonly results?: readonly DashboardDiscountClassDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type AddDashboardCustomerDiscountsRequest = {
	/** Min length 1 */
	readonly classId: string
	/** Format date-time */
	readonly startingAt?: string
	/** Format date-time */
	readonly endingAt?: string
	readonly discounts: readonly number[]
}



export type GetAllDashboardClientDiscountClassDto = {
	/** Format double */
	readonly id: number
	readonly classId?: string
	readonly name?: string
	/** Format date-time */
	readonly startingAt?: string
	/** Format date-time */
	readonly endingAt?: string
	readonly amounts?: readonly number[]
}



export type GetAllDashboardCustomersDiscountsResponse = {
	readonly results?: readonly GetAllDashboardClientDiscountClassDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type UpdateDashboardCustomerDiscountsRequest = {
	readonly amounts: readonly number[]
	/** Format date-time */
	readonly startingAt?: string
	/** Format date-time */
	readonly endingAt?: string
}



export type GetDashboardCustomerResponse = {
	readonly name?: string
}



export type GetAllDashboardClientDto = {
	readonly id?: string
	readonly name?: string
	/** Format int32 */
	readonly discountsCount: number
	/** Format int32 */
	readonly netPricesCount: number
}



export type GetAllDashboardCustomersResponse = {
	readonly results?: readonly GetAllDashboardClientDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type AddDashboardCustomerNetPriceRequest = {
	/** Min length 1 */
	readonly productId: string
	/** Format double */
	readonly netPrice: number
	/** Format date-time */
	readonly startingAt?: string
	/** Format date-time */
	readonly endingAt?: string
}



export type GetDashboardCustomerNetPriceResponse = {
	readonly productId?: string
	readonly productDescription?: string
	/** Format double */
	readonly basePrice: number
	/** Format double */
	readonly discountedPrice: number
	/** Format double */
	readonly discountPercentage: number
	/** Format date-time */
	readonly startingAt: string
	/** Format date-time */
	readonly endingAt: string
}



export type GetAllDashboardCustomerNetPricesResponse = {
	readonly results?: readonly MockGetAllDashboardClientProductsNetPriceDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type MockGetAllDashboardClientProductsNetPriceDto = {
	/** Format double */
	readonly id: number
	readonly productId?: string
	readonly imageUrl?: string
	readonly name?: string
	readonly measurementUnit?: string
	/** Format double */
	readonly netPrice: number
}



export type GetProductSalesPriceResponse = {
	/** Format double */
	readonly salePrice: number
}



export type UpdateDashboardCustomerNetPriceRequest = {
	/** Format double */
	readonly netPrice: number
	/** Format date-time */
	readonly startingAt?: string
	/** Format date-time */
	readonly endingAt?: string
}



export type AutocompleteDashboardCustomerProductsResponse = {
	readonly products?: readonly DashboardCustomerProductDto[]
}



export type DashboardCustomerProductDto = {
	readonly productId?: string
	readonly name?: string
	readonly measurementUnit?: string
	/** Format double */
	readonly netPrice: number
}



export type GetDashboardEmployeeLocationEmployeeDto = {
	readonly avatarUrl?: string
	readonly role?: string
	readonly fullName?: string
	readonly phoneNumber?: string
	readonly telephoneNumber?: string
	readonly email?: string
}



export type GetDashboardEmployeeLocationResponse = {
	readonly active: boolean
	readonly name?: string
	readonly email?: string
	/** Format double */
	readonly latitude: number
	/** Format double */
	readonly longitude: number
	readonly address?: string
	readonly phoneNumber?: string
	readonly telephoneNumber?: string
	readonly cityAndProvince?: string
	readonly manager?: string
	readonly employees?: readonly GetDashboardEmployeeLocationEmployeeDto[]
}



export type GetAllDashboardEmployeesLocationsResponse = {
	readonly locations?: readonly GetDashboardEmployeeLocationDto[]
}



export type GetDashboardEmployeeLocationDto = {
	/** Format uuid */
	readonly id: string
	/** Format double */
	readonly latitude: number
	/** Format double */
	readonly longitude: number
	readonly name?: string
	readonly active: boolean
}



export type GetPickingListFromClosedTemporaryProductDto = {
	readonly id?: string
	readonly description?: string
	readonly imageUrl?: string
	/** Format double */
	readonly quantity: number
}



export type GetPickingListFromClosedTemporaryResponse = {
	readonly carrierFullName?: string
	readonly licensePlate?: string
	readonly notes?: string
	/** Format int32 */
	readonly listNumber: number
	readonly products?: readonly GetPickingListFromClosedTemporaryProductDto[]
}



export type SubmitPickingListRequest = {
	/** Min length 1 */
	readonly storeId: string
	/** Min length 1 */
	readonly username: string
	readonly products?: readonly SubmitPickingListRequestProductDto[]
	/** Max length 40 */
	readonly carrierFullName?: string
	/** Max length 16 */
	readonly carrierLicensePlate?: string
	/** Max length 256 */
	readonly carrierCompany?: string
	/** Max length 50 */
	readonly note?: string
	/** Format date-time */
	readonly startedAt?: string
	readonly temporaryId?: string
}



export type SubmitPickingListRequestProductDto = {
	/** Min length 1 */
	readonly productId: string
	/** Format double */
	readonly quantity: number
}



export type SubmitPickingListResponse = {
	/** Format int32 */
	readonly protocolId: number
	/** Format int32 */
	readonly listNumber: number
}



export type GetPickingListProductDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
}



export type GetPickingListProductResponse = {
	readonly products?: readonly GetPickingListProductDto[]
}



export type PickingListProductDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	/** Format double */
	readonly availability: number
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
}



export type SearchPickingListProductsResponse = {
	readonly results?: readonly PickingListProductDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type CreateTemporaryPickingListRequest = {
	/** Max length 16 */
	readonly licensePlate?: string
}



export type CreateTemporaryPickingListResponse = {
	/** Format uuid */
	readonly id: string
}



export type GetTemporaryPickingListProductDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supportsDecimal: boolean
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	/** Format double */
	readonly listQuantity: number
}



export type GetTemporaryPickingListResponse = {
	/** Format uuid */
	readonly listId: string
	readonly licensePlate?: string
	/** Format date-time */
	readonly createdAt: string
	readonly products?: readonly GetTemporaryPickingListProductDto[]
}



export type AddOrUpdateProductToTemporaryPickingListRequest = {
	/** Min length 1 */
	readonly productId: string
	/** Format double */
	readonly quantity: number
}



export type GetTemporaryPickingListProductResponse = {
	/** Format double */
	readonly quantity: number
}



export type SubmitTemporaryPickingListRequest = {
	/** Max length 40 */
	readonly carrierFullName?: string
	/** Max length 256 */
	readonly carrierCompany?: string
	/** Max length 50 */
	readonly note?: string
	readonly temporaryId?: string
}



export type SubmitTemporaryPickingListResponse = {
	/** Format int32 */
	readonly listNumber: number
}



export type AutocompleteRoleDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
}



export type AutocompleteRolesResponse = {
	readonly roles?: readonly AutocompleteRoleDto[]
}



export type UpdateRoleClaimsRequest = {
	readonly scopes: readonly string[]
}



export type CreateRoleRequest = {
	/** Min length 1 */
	readonly name: string
}



export type CreateRoleResponse = {
	/** Format uuid */
	readonly id: string
}



export type GetRoleClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetRoleResponse = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly type: RoleType
	readonly claims?: readonly GetRoleClaimDto[]
}



export type GetAllRoleClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetAllRoleDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly type: RoleType
	readonly claims?: readonly GetAllRoleClaimDto[]
}



export type GetAllRolesResponse = {
	readonly results?: readonly GetAllRoleDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type UpdateRoleRequest = {
	/** Min length 1 */
	readonly name: string
}



export type SelfShopListProductDto = {
	/** Min length 1 */
	readonly productId: string
	/** Format double */
	readonly quantity: number
}



export type SubmitSelfShopListRequest = {
	/** Min length 1 */
	readonly storeId: string
	/** Min length 1 */
	readonly username: string
	readonly products?: readonly SelfShopListProductDto[]
	/** Max length 50 */
	readonly note?: string
}



export type SubmitSelfShopListResponse = {
	/** Format int32 */
	readonly listNumber: number
}



export type CreateBannerRequest = {
	/** Max length 128, Min length 1 */
	readonly title: string
	/** Max length 512, Min length 1 */
	readonly message: string
	readonly type: BannerType
	readonly sections: readonly BannerSection[]
	/** Format date-time */
	readonly startsAt?: string
	/** Format date-time */
	readonly endsAt?: string
}



export type EditBannerRequest = {
	/** Max length 128, Min length 1 */
	readonly title: string
	/** Max length 512, Min length 1 */
	readonly message: string
	readonly type: BannerType
	readonly sections: readonly BannerSection[]
	/** Format date-time */
	readonly startsAt?: string
	/** Format date-time */
	readonly endsAt?: string
}



export type GetAllBannersEnumsValuesResponse = {
	readonly types?: readonly string[]
	readonly sections?: readonly string[]
}



export type GetBannerResponse = {
	/** Format uuid */
	readonly id: string
	readonly type: BannerType
	readonly sections?: readonly BannerSection[]
	readonly title?: string
	readonly message?: string
	/** Format date-time */
	readonly startsAt?: string
	/** Format date-time */
	readonly endsAt?: string
}



export type GetAllBannerDto = {
	/** Format uuid */
	readonly id: string
	readonly title?: string
	readonly message?: string
	readonly type: BannerType
	/** Format date-time */
	readonly startsAt?: string
	/** Format date-time */
	readonly endsAt?: string
}



export type GetAllBannersResponse = {
	readonly results?: readonly GetAllBannerDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type GetLastSectionBannerResponse = {
	/** Format uuid */
	readonly id: string
	readonly title?: string
	readonly message?: string
	readonly type: BannerType
	/** Format date-time */
	readonly startsAt?: string
	/** Format date-time */
	readonly endsAt?: string
}



export type GetAllNotificationDto = {
	/** Format uuid */
	readonly id: string
	readonly key?: string
	readonly language: Language
	readonly destination: TemplateDestination
	readonly value?: string
	readonly recipients?: readonly string[]
	readonly type: TemplateType
	readonly isEnabled: boolean
	readonly provider: TemplateProvider
}



export type GetAllNotificationsResponse = {
	readonly results?: readonly GetAllNotificationDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type UpdateNotificationRequest = {
	readonly recipients: readonly string[]
	readonly isEnabled: boolean
}



export type ConfirmCycleCountingProductToCountQuantityRequest = {
	/** Format double */
	readonly quantity: number
}



export type GetCycleCountingProductToCountResponse = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supplierProductId?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly barcode?: string
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	readonly supportsDecimal: boolean
}



export type GetAllCycleCountingProductsProductDto = {
	/** Format int32 */
	readonly countId: number
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supplierProductId?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly barcode?: string
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
	readonly supportsDecimal: boolean
}



export type GetAllCycleCountingProductsToCountResponse = {
	readonly locations?: readonly GetAllCycleCountingProductsWarehouseLocationDto[]
}



export type GetAllCycleCountingProductsWarehouseLocationDto = {
	readonly name?: string
	readonly products?: readonly GetAllCycleCountingProductsProductDto[]
}



export type GetAllStoresResponse = {
	readonly stores?: readonly StoreDto[]
}



export type StoreDto = {
	readonly mistralId?: string
	readonly description?: string
	readonly name?: string
	readonly address?: string
	readonly location?: string
	readonly province?: string
	readonly postalCode?: string
	readonly numberTelephone?: string
	readonly numberMobile?: string
	readonly email?: string
	/** Format double */
	readonly latitude?: number
	/** Format double */
	readonly longitude?: number
	readonly isShowroom: boolean
	readonly isActive: boolean
	/** Format date-time */
	readonly dateOpening?: string
}



export type GetNearestStoreResponse = {
	/** Format uuid */
	readonly id: string
	readonly mistralId?: string
	readonly mistralDescription?: string
	readonly name?: string
	readonly address?: string
	readonly location?: string
	readonly province?: string
	readonly postalCode?: string
	readonly numberTelephone?: string
	readonly numberMobile?: string
	readonly email?: string
	/** Format double */
	readonly latitude?: number
	/** Format double */
	readonly longitude?: number
	readonly showroom?: boolean
	/** Format date-time */
	readonly dateOpening?: string
	readonly active?: boolean
}



export type GetAllStoreUsersClothingDto = {
	readonly username?: string
	readonly fullName?: string
	readonly avatarUrl?: string
	readonly shirtSize: DressSize
	readonly trousersSize: DressSize
}



export type GetAllStoreUsersClothingResponse = {
	readonly results?: readonly GetAllStoreUsersClothingDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type UpdateUserStoreClothingRequest = {
	readonly shirtSize: DressSize
	readonly trousersSize: DressSize
}



export type GetStoreWarehouseLocationProductDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly unitMeasure?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
}



export type GetStoreWarehouseLocationResponse = {
	readonly results?: readonly GetStoreWarehouseLocationProductDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
	readonly warehouseType: WarehouseLocationType
	readonly warehouseName?: string
}



export type GetAllStoreWarehouseLocationDto = {
	readonly id?: string
	readonly type: WarehouseLocationType
	readonly name?: string
	/** Format int32 */
	readonly articlesCount: number
}



export type GetAllStoreWarehouseLocationsResponse = {
	readonly results?: readonly GetAllStoreWarehouseLocationDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type AddStoreWarehouseLocationProductRequest = {
	readonly barcode?: string
	readonly productId?: string
}



export type SearchProductsToAddToWarehouseLocationDto = {
	readonly productId?: string
	readonly productDescription?: string
	readonly supplierId?: string
	readonly supplierDescription?: string
	readonly unitMeasure?: string
	readonly supplierProductId?: string
	readonly barcode?: string
	readonly imageUrl?: string
	readonly datasheetUrl?: string
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	readonly availability?: string
	readonly logisticStatusCode: LogisticStatusCode
	readonly additionalBarcodes?: readonly string[]
	/** Format double */
	readonly availableQuantity: number
	/** Format double */
	readonly packagesPerPallet: number
}



export type SearchProductsToAddToWarehouseLocationResponse = {
	readonly results?: readonly SearchProductsToAddToWarehouseLocationDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type AutocompleteMistralUsersResponse = {
	readonly usernames?: readonly string[]
}



export type AutocompleteUserRolesResponse = {
	readonly roles?: readonly UserRoleDto[]
}



export type UserRoleDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
}



export type GetUserClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetUserResponse = {
	readonly username?: string
	readonly firstName?: string
	readonly lastName?: string
	readonly emailAddress?: string
	readonly phoneNumber?: string
	readonly mistralUsername?: string
	readonly avatarUrl?: string
	readonly logins?: readonly string[]
	readonly claims?: readonly GetUserClaimDto[]
	readonly roles?: readonly GetUserRoleDto[]
}



export type GetUserRoleClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetUserRoleDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly claims?: readonly GetUserRoleClaimDto[]
}



export type GetAllUserClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetAllUserDto = {
	/** Format uuid */
	readonly id: string
	readonly username?: string
	readonly email?: string
	readonly firstName?: string
	readonly lastName?: string
	readonly avatarUrl?: string
	readonly roles?: readonly GetAllUserRoleDto[]
	readonly claims?: readonly GetAllUserClaimDto[]
}



export type GetAllUserRoleClaimDto = {
	/** Format int32 */
	readonly id: number
	readonly claimType?: string
	readonly claimValue?: string
}



export type GetAllUserRoleDto = {
	/** Format uuid */
	readonly id: string
	readonly name?: string
	readonly claims?: readonly GetAllUserRoleClaimDto[]
}



export type GetAllUsersResponse = {
	readonly results?: readonly GetAllUserDto[]
	/** Format int32 */
	readonly totalResults: number
	/** Format int32 */
	readonly totalPages: number
	readonly hasNextPage: boolean
	readonly hasPreviousPage: boolean
}



export type ResetUserPasswordRequest = {
	/** Format uuid */
	readonly userId: string
}



export type ResetUserPasswordResponse = {
	readonly newPassword?: string
}



export type UpdateUserRequest = {
	/** Min length 1 */
	readonly firstName: string
	/** Min length 1 */
	readonly lastName: string
	/** Min length 1 */
	readonly username: string
	readonly mistralUsername?: string
	/** Min length 1 */
	readonly emailAddress: string
	/** Min length 1 */
	readonly phoneNumber: string
	readonly roles: readonly string[]
}



export type BannerSection = 'Home' | 'Amministrazione' | 'Clienti' | 'AreaRiservata' | 'Personale' | 'Magazzino'



export type BannerType = 'Alert' | 'Info' | 'Warning' | 'Success'



export type CervedCgsScore = 'NonDisponibile' | 'NonAffidabile' | 'Bassa' | 'Contenuta' | 'Moderata' | 'Media' | 'Buona' | 'Elevata' | 'Massima'



export type CompanyRole = 'BasicUser' | 'AdvancedUser' | 'Administrator' | 'Owner'



export type CompanyVerificationMethod = 'Spid' | 'Manual'



export type CompanyVerificationStatus = 'Pending' | 'Rejected' | 'Verified'



export type CrmCustomerOrderStatus = 'Unprocessed' | 'Processed' | 'PartiallyProcessed'



export type CrmCustomerQuoteStatus = 'Sent' | 'Unsent'



export type CrmCustomerRecentActivityType = 'Document'



export type DressSize = 'Xxs42' | 'Xs44' | 'S46' | 'M48' | 'L50' | 'Xl52' | 'Xxl54' | 'Xxxl56'



export type Language = 'Italian' | 'English'



export type LogisticStatusCode = 'Commessa' | 'Stock'



export type MediaType = 'File' | 'Image'



export type RoleType = 'System' | 'Custom'



export type TemplateDestination = 'Sms' | 'Email'



export type TemplateProvider = 'Brevo' | 'SendGrid' | 'Twilio' | 'Mock'



export type TemplateType = 'Internal' | 'External'



export type WarehouseLocationType = 'P' | 'S' | 'J'



export type CustomerDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
}



export type KpiColor = 'Green' | 'Yellow' | 'Red'



export type MatrixSector = 'Upper' | 'Lower'



export type Period = 'ThirtyDaysRolling' | 'NinetyDaysRolling' | 'OneHundredTwentyDaysRolling'



export type QuoteDto = {
	/** Format int32 */
	readonly id: number
	readonly name?: string
	readonly mistralId?: string
	readonly customerId?: string
	readonly customerName?: string
	readonly customerScore?: string
	/** Format double */
	readonly totalAmount: number
	readonly location?: string
	readonly store?: string
	/** Format date-time */
	readonly createdAt: string
	/** Format date-time */
	readonly expiresAt?: string
	readonly status: QuoteStatus
	readonly accessCode?: string
	/** Format date-time */
	readonly sentAt: string
	readonly seenByCustomer: boolean
}



export type QuoteProductDto = {
	/** Format int32 */
	readonly id: number
	readonly productId?: string
	readonly supplierProductId?: string
	readonly name?: string
	readonly imageUrl?: string
	/** Format double */
	readonly totalPrice: number
	/** Format double */
	readonly grossUnitPrice: number
	/** Format double */
	readonly netUnitPrice: number
	/** Format double */
	readonly quantity: number
	readonly unit?: string
	readonly supportsDecimals: boolean
	readonly yield?: string
	/** Format double */
	readonly discount1: number
	/** Format double */
	readonly discount2: number
	/** Format double */
	readonly discount3: number
	/** Format double */
	readonly discount4: number
	/** Format int32 */
	readonly packagesPerPallet: number
	/** Format double */
	readonly palletQuantity: number
	/** Format double */
	readonly stock: number
	/** Format double */
	readonly packageQuantity: number
	/** Format double */
	readonly availableQuantity: number
}



export type QuoteStatus = 'Draft' | 'Sent'



export type GetCustomersBySectorResponse = {
	readonly customers?: readonly GetCustomersBySectorResponse+CustomerBySectorDto[]
}



export type GetCustomersBySectorResponse+CustomerBySectorDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
	/** Format double */
	readonly totalSalesAmount: number
	/** Format double */
	readonly marginPercentage: number
}



export type GetCustomerDetailResponse = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
}



export type GetFocusCustomersResponse = {
	readonly customers?: readonly GetFocusCustomersResponse+FocusCustomerDto[]
}



export type GetFocusCustomersResponse+FocusCustomerDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
	/** Format double */
	readonly totalSalesAmount: number
}



export type GetInactiveCustomersResponse = {
	readonly inactiveCustomers?: readonly GetInactiveCustomersResponse+InactiveCustomerDto[]
}



export type GetInactiveCustomersResponse+InactiveCustomerDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
	/** Format double */
	readonly lastSaleAmount: number
	/** Format date-time */
	readonly lastSaleDate: string
}



export type GetLostCustomersResponse = {
	readonly lostCustomers?: readonly GetLostCustomersResponse+LostCustomerDto[]
}



export type GetLostCustomersResponse+LostCustomerDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
	/** Format double */
	readonly lastSaleAmount: number
	/** Format date-time */
	readonly lastSaleDate: string
}



export type GetProspectsResponse = {
	readonly prospects?: readonly GetProspectsResponse+ProspectDto[]
}



export type GetProspectsResponse+ProspectDto = {
	readonly id?: string
	readonly name?: string
	readonly email?: string
	readonly phone?: string
	readonly address?: string
	readonly eooScore?: string
}



export type SearchCustomersResponse = {
	readonly customers?: readonly CustomerDto[]
}



export type GetEooMatrixPulseKpiResponse = {
	/** Format double */
	readonly healthyPercentage: number
	readonly color: KpiColor
}



export type GetAbsoluteMarginResponse = {
	/** Format double */
	readonly margin: number
	readonly color: KpiColor
}



export type GetMarginPercentageResponse = {
	/** Format double */
	readonly percentage: number
	readonly color: KpiColor
}



export type GetQuotesProgressResponse = {
	/** Format int32 */
	readonly quotesDone: number
	/** Format int32 */
	readonly target: number
}



export type GetRevenueResponse = {
	/** Format double */
	readonly revenue: number
	readonly color: KpiColor
}



export type CreateQuoteRequest = {
	readonly customerId?: string
	readonly title?: string
	readonly store?: string
	readonly customerWorksiteId?: string
	/** Format date-time */
	readonly deliveryDate: string
	/** Format date-time */
	readonly expirationDate: string
	readonly products?: readonly CreateQuoteRequest+ProductDto[]
}



export type CreateQuoteRequest+ProductDto = {
	readonly productId?: string
	/** Format double */
	readonly quantity: number
}



export type CreateQuoteResponse = {
	/** Format int32 */
	readonly id: number
}



export type GetQuoteResponse = {
	/** Format int32 */
	readonly id: number
	readonly name?: string
	readonly mistralId?: string
	readonly customerId?: string
	readonly customerName?: string
	readonly customerScore?: string
	/** Format double */
	readonly totalAmount: number
	readonly location?: string
	readonly store?: string
	/** Format date-time */
	readonly createdAt: string
	/** Format date-time */
	readonly expiresAt?: string
	readonly status: QuoteStatus
	readonly accessCode?: string
	/** Format date-time */
	readonly sentAt: string
	readonly seenByCustomer: boolean
	readonly primaryContact?: string
}



export type GetAllQuotesResponse = {
	readonly quotes?: readonly QuoteDto[]
}



export type GetAllQuoteProductsResponse = {
	readonly quoteProducts?: readonly QuoteProductDto[]
}



export type UpdateProductPriceRequest = {
	/** Format double */
	readonly unitPrice: number
	/** Format double */
	readonly discount1: number
	/** Format double */
	readonly discount2: number
	/** Format double */
	readonly discount3: number
	/** Format double */
	readonly discount4: number
}



export type UpdateProductQuantityRequest = {
	/** Format double */
	readonly quantity: number
}



export type EooScoreRiskClass = 'A' | 'B' | 'C' | 'D'



export type ProblemDetails = {
	readonly type?: string
	readonly title?: string
	/** Format int32 */
	readonly status?: number
	readonly detail?: string
	readonly instance?: string
}

