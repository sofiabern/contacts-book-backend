const parseType = (type) => {
    if (typeof type === 'string') {
      const validTypes = ['work', 'home', 'personal'];
      if (validTypes.includes(type)) return type;
    }
    return undefined;
  };
  
  const parseIsFavourite = (value) => {
    if (typeof value === 'boolean') return value;
  
    if (typeof value === 'string') {
      const trimmedValue = value.trim().toLowerCase();
      if (trimmedValue === 'true') return true;
      if (trimmedValue === 'false') return false;
    }
  
    return undefined;
  };
  
  export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;
  
    const parsedType = parseType(type);
    const parsedIsFavourite = parseIsFavourite(isFavourite);
    return {
      type: parsedType,
      isFavourite: parsedIsFavourite,
    };
  };
  