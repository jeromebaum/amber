Smalltalk current createPackage: 'Helios-Announcements'!
Object subclass: #HLAnnouncement
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLCodeHandled
	instanceVariableNames: 'code'
	package: 'Helios-Announcements'!

!HLCodeHandled methodsFor: 'accessing'!

code

	^ code
!

code: aModel

	code := aModel
! !

!HLCodeHandled class methodsFor: 'actions'!

on: aCodeModel

	^ self new 
    	code: aCodeModel;
        yourself
! !

HLCodeHandled subclass: #HLDoItExecuted
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLDoItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLInspectItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLCodeHandled subclass: #HLPrintItRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLDiveRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLErrorRaised
	instanceVariableNames: 'error'
	package: 'Helios-Announcements'!

!HLErrorRaised methodsFor: 'accessing'!

error
	^ error
!

error: anError
	error := anError
! !

HLErrorRaised subclass: #HLCompileErrorRaised
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLErrorRaised subclass: #HLParseErrorRaised
	instanceVariableNames: 'line column message'
	package: 'Helios-Announcements'!

!HLParseErrorRaised methodsFor: 'accessing'!

column
	^ column
!

column: anInteger
	column := anInteger
!

line
	^ line
!

line: anInteger
	line := anInteger
!

message
	^ message
!

message: aString
	message := aString
! !

HLErrorRaised subclass: #HLUnknownVariableErrorRaised
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLClassesFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLMethodsFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLPackagesFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLProtocolsFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLFocusRequested subclass: #HLSourceCodeFocusRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLInstVarAdded
	instanceVariableNames: 'theClass variableName'
	package: 'Helios-Announcements'!

!HLInstVarAdded methodsFor: 'accessing'!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

HLAnnouncement subclass: #HLItemSelected
	instanceVariableNames: 'item'
	package: 'Helios-Announcements'!

!HLItemSelected methodsFor: 'accessing'!

item
	^ item
!

item: anObject
	item := anObject
! !

!HLItemSelected class methodsFor: 'instance creation'!

on: anItem
	^ self new
    	item: anItem;
        yourself
! !

HLItemSelected subclass: #HLClassSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLInstanceVariableSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLMethodSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLPackageSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLItemSelected subclass: #HLProtocolSelected
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLRefreshRequested
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLSaveSourceCode
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowCommentToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!

HLAnnouncement subclass: #HLShowInstanceToggled
	instanceVariableNames: ''
	package: 'Helios-Announcements'!
