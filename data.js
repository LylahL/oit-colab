
// Enum for tag types
export const TagType = {
    TEAM: 'team',
    SERVICE: 'service',
    SKILL: 'skill',
}

export class Tag {
    constructor(type, name, proficiency){
        this.name = name;
        this.type = type;
    }
}

export class Person {
    constructor(name, tags = []){
        this.name = name;
        this.tags = tags;
    }
}

export var tagList = [new Tag(TagType.TEAM, 'Student Experience'), 
new Tag(TagType.SERVICE, 'Honors Program'), 
new Tag(TagType.SKILL, "Java"), 
new Tag(TagType.SERVICE, 'Continuing Education'), 
new Tag(TagType.SERVICE, 'Graduate Admissions')];


export var PeopleList = [
    new Person('Lylah', 
    [new Tag(TagType.TEAM, 'Student Experience'), 
    new Tag(TagType.SERVICE, 'Honors Program'), 
    new Tag(TagType.SKILL, "Java")]),
    new Person('Adrian', 
    [new Tag(TagType.TEAM, 'Student Experience'), 
    new Tag(TagType.SERVICE, 'Continuing Education')]),
    new Person('Dylan', 
    [new Tag(TagType.TEAM, 'Student Experience'), 
    new Tag(TagType.SERVICE, 'Graduate Admissions')])
];

