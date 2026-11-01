
Feature: Student Management API Testing

Background:
    * url 'http://localhost:3001'

Scenario: Get all students
    Given path '/api/students'
    When method GET
    Then status 200
    And match response == '#[]'
    And match response[0].name == 'Rahul'

Scenario: Add a new student
    Given path '/api/students'
    And request
    """
    {
        "name": "Ananya",
        "age": 20,
        "course": "CSE"
    }
    """
    When method POST
    Then status 201
    And match response.name == 'Ananya'
    And match response.course == 'CSE'

Scenario: Reject invalid student details
    Given path '/api/students'
    And request
    """
    {
        "name": "Test",
        "age": -5,
        "course": "CSE"
    }
    """
    When method POST
    Then status 400
