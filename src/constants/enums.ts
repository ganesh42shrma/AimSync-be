export enum EventType {
    CYPHER = 'CYPHER',
    MLDS = 'MLDS',
    MACHINECON = 'MACHINECON',
    HAPPYLLAMA = 'HAPPYLLAMA',
    DES = 'DES',
    CDOVISION = 'CDOVISION',
    INTERNAL = 'INTERNAL',
    OTHER = 'OTHER'
}

export enum EventStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    EXTERNAL = 'EXTERNAL'
}

export enum Organization {
    AIM = 'AIM',
    OTHERS = 'OTHERS'
}

export enum TeamName {
    MACHINEHACK = 'MACHINEHACK',
    AIM_RESEARCH = 'AIM_RESEARCH',
    CREATIVES = 'CREATIVES',
    GROWTHMARKETS = 'GROWTHMARKETS',
    VIDEO = 'VIDEO',
    BRANDSOLUTIONS = 'BRANDSOLUTIONS',
    BUSSINESSDEVELOPMENT = 'BUSSINESSDEVELOPMENT',
    HR = 'HR',
    EVENTS = 'EVENTS',
    SOCIALMEDIA = 'SOCIALMEDIA',
    FINANCE = 'FINANCE',
    OTHER = 'OTHER'
}

export enum SponsorClassification {
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
    SILVER = 'SILVER',
    MEDIA = 'MEDIA',
    OTHER = 'OTHER'
}

export enum LogisticsStatus {
    PENDING = 'PENDING',
    IN_TRANSIT = 'IN_TRANSIT',
    DELIVERED = 'DELIVERED',
    RETURNED = 'RETURNED',
    LOST = 'LOST'
}

export enum LogisticsDirection {
    INBOUND = 'INBOUND',
    OUTBOUND = 'OUTBOUND',
    RETURN = 'RETURN'
}

export enum AwardRecipientType {
    SPEAKER = 'SPEAKER',
    GUEST = 'GUEST'
}