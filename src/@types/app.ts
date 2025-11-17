export type NavState = {
  extended?: boolean;
  activeSection?: string | null;
}

export type ModalContent = {
  // Add your modal content properties here
  title?: string;
  body?: string;
}

export type DataObject = {
  initialized: boolean;
  officeHours: Record<string, string>[];
  responsePending: boolean;
  modalContent: ModalContent | null;
  navState: NavState
}

export type UpdateObject = Partial<DataObject>

export interface ContextValue {
  data: DataObject;
  setData: React.Dispatch<React.SetStateAction<DataObject>>;
  updateData: (obj: UpdateObject) => void;
  updateNav: (obj: NavState) => void;
}

export type NavigationItem = {
  url: string;
  label: string;
  classes?: string
}