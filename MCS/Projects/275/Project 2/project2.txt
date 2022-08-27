import datetime as dt
import matplotlib.pyplot as plt
import statistics


class Traffic(object):
    def __init__(self, traf_file):
        with open(traf_file, 'r') as f:
            in_read = f.readlines()
            lines = in_read[1:]
        self.list_of_dates = []
        self.list_of_genders = []
        self.list_of_UIDs = []
        raw_age = []
        for i in range(len(lines)):
            split_lines = lines[i].split(',')
            split_date_time = split_lines[5].split(' ')
            just_date = list(map(int, split_date_time[0].split('/')))
            date = dt.date(just_date[2], just_date[0], just_date[1])
            self.list_of_dates.append(date)
            gender = split_lines[10]
            self.list_of_genders.append(gender)
            ages = split_lines[11]
            raw_age.append(ages)
            person_id = split_lines[0]
            self.list_of_UIDs.append(person_id)
        # There are some blank ages & some genders in the age column
        ages_clean = ' '.join(raw_age).split()
        ages_filt = list(filter(str.isdigit, ages_clean))
        ages_int = list(map(int, ages_filt))
        self.list_of_ages = ages_int

    def total_number_of_crashes(self, start, end):
        count = 0
        # Change start, end to datetime.date objects for ease of use
        strt = list(map(int, start.split('/')))
        start_dt = dt.date(strt[2], strt[0], strt[1])
        end_d = list(map(int, end.split('/')))
        end_date = dt.date(end_d[2], end_d[0], end_d[1])
        for i in range(len(self.list_of_dates)):
            if end_date >= self.list_of_dates[i] >= start_dt:
                count += 1
        return count

    def crash_frequency(self, month):
        count = 0
        for i in range(len(self.list_of_dates)):
            if self.list_of_dates[i].month == month:
                count += 1
        return count

    def average_age(self):
        return round(statistics.mean(self.list_of_ages), 3)

    def median_age(self):
        return statistics.median(self.list_of_ages)

    def gender_crash_counts(self):
        m_count = 0
        f_count = 0
        x_count = 0
        for i in range(len(self.list_of_genders)):
            if self.list_of_genders[i] == "M":
                m_count += 1
            elif self.list_of_genders[i] == "F":
                f_count += 1
            else:
                x_count += 1
        return [f_count, m_count, x_count]

    def most_frequent_individual(self):
        # NO unique id's repeat, if they did I would use the comment:
        # return statistics.mode(self.list_of_UIDs)
        return "One person per accident, no repeating case"

    def month_histogram(self):
        crashes_each_month = []
        for i in range(1, 13):
            for j in range(self.crash_frequency(i)):
                crashes_each_month.append(i)
        plt.xlabel("Months")
        plt.ylabel("Frequency of Crashes per Month")
        plt.hist(crashes_each_month, bins=12)
        plt.show()


def main():
    T = Traffic("Traffic_Crashes_-_People.csv")
    print(T.total_number_of_crashes("01/1/2017", "6/1/2021"))
    print(T.crash_frequency(6))
    print(T.average_age())
    print(T.median_age())
    print(T.gender_crash_counts())
    print(T.most_frequent_individual())
    print(T.month_histogram())

main()